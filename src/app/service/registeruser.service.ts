import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  public formData: FormGroup;
  private apiUrl1="http://localhost:8080/register";
  private apiUrl2="http://localhost:8080/uploadPhoto/user";
  islogin=false;
  admin=false;
  user=false;
  list: User[];
  message: string;
  photo: string;
  constructor(private http: HttpClient) { }
  createData(info: Object){
    return this.http.post(`${this.apiUrl1}`,info);
  }
 /* uploadPhoto(formdata: FormData){
    this.http.post(`${this.apiUrl2}`, formdata)
        .subscribe(
            data => console.log('success'),
            error => console.log(error)
        )
  }*/
  uploadPhoto(file: File): Promise<any> {
    let link= 'http://localhost:8080/uploadPhoto/user';
      let formdata: FormData = new FormData();
      let path= 'C:\\Users\\youss\\upload\\user';
      formdata.append('file', file ,file.name);
      return this.http.post(link,formdata).toPromise();
    }
}