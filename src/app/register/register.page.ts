import { Component,  Input,  ViewChild } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonInput } from '@ionic/angular';
import { PasswordValidator } from '../validators/passwd';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{
  @ViewChild('signupSlider') signupSlider;

  public slideOneForm: FormGroup;
	public slideTwoForm: FormGroup;
  public slideThreeForm: FormGroup;
  selectedFile=null;

	public submitAttempt: boolean = false;
  constructor(public formBuilder: FormBuilder) { 
    this.slideOneForm = formBuilder.group({
      prenom: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      nom: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      dateNaissance: ['']
  });

  this.slideTwoForm = formBuilder.group({
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
    motdepasseconfirm: ['',Validators.required]
}, {validator: PasswordValidator.passwordsMatch});

    this.slideThreeForm = formBuilder.group({
      bio: [''],
      photo: [this.selectedFile]
      });
    }

  
  next(){
    this.signupSlider.slideNext();
  }

    prev(){
        this.signupSlider.slidePrev();
    }

    save(){

      this.submitAttempt = true;

      if(!this.slideOneForm.valid){
          this.signupSlider.slideTo(0);
      } 
      else if(!this.slideTwoForm.valid){
          this.signupSlider.slideTo(1);
      }
      else if(!this.slideThreeForm.valid){
        this.signupSlider.slideTo();
    }
      else {
          console.log("success!")
          console.log(this.slideOneForm.value);
          console.log(this.slideTwoForm.value);
          console.log(this.slideThreeForm.value);
      }
  }
 
  onFileSelected($event){
   this.selectedFile=$event.target.files[0];
    console.log(this.selectedFile);
  }
  
}


