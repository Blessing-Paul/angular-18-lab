import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel, users } from '../model/LoginModel';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  proceedLogin(data: LoginModel) {
    return this.http.get<users[]>('http://localhost:3000/users?id=' +data.username +'&&password=' +data.password
    );
  }

  isLoggedIn() {
    return localStorage.getItem('username') != null;
  }

  proceedRegister(data: users){
    return this.http.post('http://localhost:3000/users', data)
  }
}
