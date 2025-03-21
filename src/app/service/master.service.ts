import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel, users } from '../model/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  login(data:LoginModel){
    return this.http.get<users[]>('http://localhost:3000/users?id=' + data.username + '&&password=' + data.password);
  }
}
