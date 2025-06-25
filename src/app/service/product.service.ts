import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../model/ProductModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:3000/product';

  constructor(private http: HttpClient) {}

  GetAll() {
    return this.http.get<Products[]>(this.baseUrl);
  }

  GetProductById(id: number): Observable<Products> {
    return this.http.get<Products>(this.baseUrl + '/' + id);
  }

  CreateProduct(_data: Products) {
    return this.http.post(this.baseUrl, _data);
  }

  UpdateProduct(_data: Products) {
    return this.http.put(this.baseUrl + '/' + _data.id, _data);
  }

  RemoveProduct(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
