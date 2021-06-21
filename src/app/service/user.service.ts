import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public formData : FormGroup;
  private url = 'http://localhost:8080/login';
  islogin = false;
  admin=false;
  suser = false;
 
  constructor(private http:HttpClient) { }

  login(email, password){
    return this.http.post(`${this.url}`,{email, password});
  }
}
