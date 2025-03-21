import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { LoginModel } from '../../model/LoginModel';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../service/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private loginService: MasterService, private router: Router) {}

  _loginData: LoginModel = {
    username: '',
    password: '',
  };

  proceedToLogin(form: any) {
    if (form.valid) {
      this.loginService.login(this._loginData).subscribe((item) => {
        let response = item;
        if (response.length > 0) {
          //reroute to what page to be displayed since this is a login page
          //To redirect you need to inject router in the constructor function
          this.router.navigateByUrl('');
        } else {
          alert('Invalid Credentials');
        }
      });
    }
  }
}
