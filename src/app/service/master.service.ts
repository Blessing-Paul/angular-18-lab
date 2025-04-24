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
    //mock url for understanding how the parameters was passed in the above get request
    //http://localhost:3000/users?id=admin&&password=12345
    );
  }

  isLoggedIn() {
    return localStorage.getItem('username') != null;
  }

  proceedRegister(data: users){
    return this.http.post('http://localhost:3000/users', data)
  }
}
