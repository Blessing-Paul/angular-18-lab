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


@Component({
  selector: 'app-product',
  imports: [MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatInputModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.LoadProduct();
  }

  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'status', 'actions'];
  dataSource!: MatTableDataSource<Products>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  productList: Products[] = [];

  LoadProduct() {
    this.service.GetAll().subscribe((item) => {
      this.productList = item;
      this.dataSource = new MatTableDataSource(this.productList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
