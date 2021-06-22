import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  public formData: FormGroup;
  private apiUrl1="http://localhost:8080/register";
  islogin=false;
  admin=false;
  user=false;
  list: User[];
  constructor(private http: HttpClient) { }
  getData(id:number): Observable<Object>{
    return this.http.get(`${this.apiUrl1}/${id}`);
  }
  updateData(id:number,value: any): Observable<Object>{
    return this.http.put(`${this.apiUrl1}/${id}`,{ responseType: 'text'});
  }
  createData(info: Object): Observable<Object>{
    return this.http.post(`${this.apiUrl1}`,info);
  }
  getAll(id:number): Observable<any>{
    return this.http.get(`${this.apiUrl1}`);
  }
}
    

