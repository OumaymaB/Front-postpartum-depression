import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { UserService } from '../service/user.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  user : any = {};
  
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    public userService : UserService,
    private show : AppComponent
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit(): void {
 const val = this.form.value;
 this.userService.login(val.email,val.password).subscribe(
 res =>{
   this.user = res;
   console.log(res);
   localStorage.setItem("id", this.user.user_id);
   let jwt = this.user.token;
 localStorage.setItem("token",jwt)
 this.show.showmenu = true;
 console.log(this.show.showmenu);
this.router.navigate(['/accueil']);

 },
 error => 
 console.log(this.user)
 );
 
  }


}
