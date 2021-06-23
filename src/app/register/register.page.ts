import { Component,  Input,  ViewChild } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonInput } from '@ionic/angular';
import { MustMatch } from '../validators/passwd';
import { RegisteruserService } from '../service/registeruser.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{
  @ViewChild('signupSlider') signupSlider;

  public Form: FormGroup;
  private toast: any;
  selectedFile= null;
  user : any = {};
  showmenu =  this.userService.islogin;
	public submitAttempt: boolean = false;
  constructor(public formBuilder: FormBuilder, 
    public service: RegisteruserService, private mytoast: ToastController, private router: Router,public auth:AuthService, public userService : UserService) { 
    this.Form = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      dateBirth: ['',Validators.required],
      userName: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
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
      passwordconfirm: ['',Validators.required],
      bio: [''],
      photo: [this.selectedFile]      
  },{
    validator: MustMatch('password','passwordconfirm')
  });
    } 

    save(){
      this.submitAttempt = true;

      if(!this.Form.valid){
          this.signupSlider.slideTo(0);
      } 
      else {
          const val=this.Form.value;
          let formdata=new FormData();
          formdata.append('image',this.selectedFile,this.selectedFile.name);
          this.service.uploadPhoto(formdata);
          this.service.createData(val).
           subscribe( data=>{
            // this.showToast("Success Validation...");
             //this.router.navigate(['/profil']);
             //this.auth.login(this.Form.value.mail,this.Form.value.password);
            localStorage.setItem("id", this.user.user_id);
            let jwt = this.user.token;
            localStorage.setItem("token",jwt)
            this.showmenu = true;
            this.router.navigate(['/accueil']);
           });
      }
  }
 
  onFileSelected($event){
   this.selectedFile=$event.target.files[0];
  }
  next(){
    this.signupSlider.slideNext();
  }

    prev(){
     // if(this.signupSlider.getActiveIndex()==0) 
     this.signupSlider.getActiveIndex().then(index=>{
       if(index==0){ 
       this.router.navigate['/home'];
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


