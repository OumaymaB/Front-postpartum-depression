import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../validators/passwd';
import { RegisteruserService } from '../service/registeruser.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('signupSlider') signupSlider;

  public Form: FormGroup;
  private toast: any;
  selectedFile: File;
  user: any = {};
  public submitAttempt: boolean = false;

  constructor(public formBuilder: FormBuilder,
    public service: RegisteruserService, private mytoast: ToastController, private router: Router, public userService: UserService, private http: HttpClient) {
    this.Form = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      dateBirth: ['', Validators.required],
      userName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      mail: ['',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
      password: ['', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])],
      passwordconfirm: ['', Validators.required],
      bio: [''],
      photo: [this.selectedFile]
    }, {
      validator: MustMatch('password', 'passwordconfirm')
    });
  }
  ngOnInit(): void { }

  save() {
    this.submitAttempt = true;

    if (!this.Form.valid) {
      this.signupSlider.slideTo(0);
    }
    else {
      const val = this.Form.value;
      this.service.uploadPhoto(this.selectedFile).then(
        (response) => {
          this.service.photo = response.path;
          console.log(response);
          localStorage.setItem("photo", this.service.photo);
          let jwt = this.user.token;
          localStorage.setItem("token", jwt);
          this.service.createData(val).subscribe(
            (response) => {
              this.user = response;
              console.log(response);
              /*localStorage.setItem("photo", this.service.photo);
              let jwt = this.user.token;
               localStorage.setItem("token",jwt);*/
              this.service.createData(val).subscribe(
                (response)=> {
                  this.user = response;
                  console.log(response);
                  localStorage.setItem("id", this.user.user_id);
                  let jwt = this.user.token;
                localStorage.setItem("token",jwt);
                this.router.navigate(['/accueil']);
                }
              );
            }
          );
        }
      );
         /* let formdata=new FormData();
 formdata.append('image',this.selectedFile,this.selectedFile.name);
 this.service.createData(val,this.Form.value.mail,this.Form.value.password).
  subscribe( data=>{
   // this.showToast("Success Validation...");
    //this.router.navigate(['/profil']);
    //this.auth.login(this.Form.value.mail,this.Form.value.password);
   localStorage.setItem("id", this.user.user_id);
   let jwt = this.user.token;
   localStorage.setItem("token",jwt)
   this.router.navigate(['/accueil']);
  });*/
}
}

onFileSelected($event){
this.selectedFile=<File>$event.target.files[0];
}
next(){
this.signupSlider.slideNext();
}

prev(){
// if(this.signupSlider.getActiveIndex()==0)
this.signupSlider.getActiveIndex().then(index=>{
if(index==0){
this.router.navigate['/slides'];
console.log(index);
}
});
this.signupSlider.slidePrev();
}
showToast(msg){
this.toast=this.mytoast.create({
message: msg,
duration: 2000
}).then((toastData)=>{console.log(toastData);toastData.present()});
}
}
