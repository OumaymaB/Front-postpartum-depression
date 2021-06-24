import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public formData : FormGroup;
  private url = 'http://localhost:8080';


  user = new BehaviorSubject<User>(null);
  isLogin = new BehaviorSubject<boolean>(false);
 
  constructor(private http:HttpClient) { }

  login(email, password){
    return this.http.post(`${this.url}/login`,{email, password});
  }

  getUser(id ): Observable<User>{
    return this.http.get<User>(this.url+'/user/'+ id);
  }

  getPublication(): Observable<User>{
    return this.http.get<User>(this.url+'/publication');
  }

  deletePub(id){
    return this.http.delete(this.url+'/publication/user/'+id);
  }

  getUsers(name): Observable<User>{
    return this.http.get<User>(this.url+'/users/'+name);
  }

}
