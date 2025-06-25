import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Products } from '../../model/ProductModel';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddproductComponent } from '../addproduct/addproduct.component';

@Component({
  selector: 'app-product',
  imports: [
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    MatDialogModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  constructor(private service: ProductService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.LoadProduct();
  }

  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'price',
    'status',
    'actions',
  ];
  dataSource!: MatTableDataSource<Products>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  productList: Products[] = [];

  LoadProduct() {
    this.service.GetAll().subscribe((item) => {
      this.productList = item;
      this.dataSource = new MatTableDataSource(this.productList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  Createproduct() {
    this.Openpopup(0, 'Create Product');
  }

  Openpopup(id: number, title: string) {
    this.dialog
      .open(AddproductComponent, {
        width: '40%',
        enterAnimationDuration: '300ms',
        exitAnimationDuration: '300ms',
        data: {
          id: id,
          title: title,
        },
      })
      .afterClosed()
      .subscribe((item) => {
        this.LoadProduct();
      });
  }

  EditProduct(id: number) {
    this.Openpopup(id, 'Edit Product');
  }

  DeleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.service.RemoveProduct(id).subscribe((item) => {
        alert('Removed Successfully ');
        this.LoadProduct();
      });
    }
  }
}
