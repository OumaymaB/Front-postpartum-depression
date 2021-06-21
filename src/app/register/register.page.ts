import { Component,  Input,  ViewChild } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonInput } from '@ionic/angular';
import { MustMatch } from '../validators/passwd';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{
  @ViewChild('signupSlider') signupSlider;

  public Form: FormGroup;
	/*public slideTwoForm: FormGroup;
  public slideThreeForm: FormGroup;*/
  selectedFile=null;

	public submitAttempt: boolean = false;
  constructor(public formBuilder: FormBuilder) { 
    this.Form = formBuilder.group({
      prenom: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      nom: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      dateNaissance: [''],
      nomuser: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: ['',
      Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
       motdepasse: ['', Validators.compose([
       Validators.minLength(5),
       Validators.required,
       Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])],
      motdepasseconfirm: ['',Validators.required],
      bio: [''],
      photo: [this.selectedFile]      
  },{
    validator: MustMatch('motdepasse','motdepasseconfirm')
  });
    } 

    save(){

      this.submitAttempt = true;

      if(!this.Form.valid){
          this.signupSlider.slideTo(0);
      } 
      else {
          console.log("success!")
          console.log(this.Form.value);
      }
  }
 
  onFileSelected($event){
   this.selectedFile=$event.target.files[0];
    console.log(this.selectedFile);
  }
  next(){
    this.signupSlider.slideNext();
  }

    prev(){
        this.signupSlider.slidePrev();
    }
}


