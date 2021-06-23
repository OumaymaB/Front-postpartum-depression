import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public formData : FormGroup;
  private url = 'http://localhost:8080';
  islogin = false;
  admin=false;
  suser = false;
 
  constructor(private http:HttpClient) { }

  login(email, password){
    return this.http.post(`${this.url}/login`,{email, password});
  }

  getUser(id ): Observable<User>{
    return this.http.get<User>(this.url+'/user/'+ id);
  }

  getPublication(user): Observable<User>{
    return this.http.get<User>(this.url+'/publication');
  }

  getUsers(name): Observable<User>{
    return this.http.get<User>(this.url+'/users/'+name);
  }

}
