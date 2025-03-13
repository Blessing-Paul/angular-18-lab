import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { LoginModel } from '../../model/LoginModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  _loginData: LoginModel = {
    username: '',
    password: '',
  };

  proceedToLogin(form:any) {
    if(form.valid){
      console.log(this._loginData)
    }
  }
}
