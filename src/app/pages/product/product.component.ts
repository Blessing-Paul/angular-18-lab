import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Products } from '../../model/ProductModel';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  constructor(private service: ProductService) {}

  productList: Products[] = [];

  ngOnInit(): void {
    this.LoadProduct();
  }

  LoadProduct() {
    this.service.GetAll().subscribe((item) => {
      this.productList = item;
    });
  }
}
