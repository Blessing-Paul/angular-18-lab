import { Component, Inject, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../service/product.service';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Products } from '../../model/ProductModel';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-addproduct',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    // RouterLink,
  ],

  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css',
})
export class AddproductComponent implements OnInit {
  constructor(
    private service: ProductService,
    private builder: FormBuilder,
    private ref: MatDialogRef<AddproductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  _dialogdata: any;

  productInfo!: Products;

  productForm!: FormGroup;
  ngOnInit(): void {
    this._dialogdata = this.data;
    console.log(this._dialogdata);
    if (this._dialogdata.id != 0) {
      this.service.GetProductById(this._dialogdata.id).subscribe((item) => {
        this.productInfo = item;
        this.productForm.setValue({
          id: this.productInfo.id,
          name: this.productInfo.name,
          description: this.productInfo.description,
          price: this.productInfo.price,
          status: this.productInfo.status,
        });
      });
    }

    this.productForm = this.builder.group({
      id: this.builder.control({ value: null, disabled: true }),
      name: this.builder.control('', Validators.required),
      description: this.builder.control('', Validators.required),
      price: this.builder.control(1, Validators.required),
      status: this.builder.control(true, Validators.required),
    });
  }

  proceedSave() {
    if (this.productForm.valid) {
      let _data: Products = {
        //id: this.productForm.value.id as number,
        name: this.productForm.value.name as string,
        description: this.productForm.value.description as string,
        price: this.productForm.value.price as number,
        status: this.productForm.value.status as boolean,
      };

      if (this._dialogdata.id != 0) {
        _data.id = this._dialogdata.id;
        this.service.UpdateProduct(_data).subscribe((item) => {});
        alert('Updated Successfully');
      } else {
        this.service.CreateProduct(_data).subscribe((item) => {
          alert('Created Successfully');
        });
      }
      this.productForm.reset();
      this.ref.close();
    }
  }

  closeModal() {
    this.ref.close();
  }
}
