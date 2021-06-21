import { FormControl, FormGroup } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string){
    /*let pwd1 = cg.get('motdepasse');
    let pwd2 = cg.get('motdepasseconfirm');
    let rv: {[error: string]: any} = {};
    if ((pwd1.touched || pwd2.touched) && pwd1.value !== pwd2.value) {
      rv['passwordMismatch'] = true;
    }
    return rv;*/
	return(formGroup: FormGroup)=>{
		const control= formGroup.controls[controlName];
		const matchingcontrol= formGroup.controls[matchingControlName];
		if(matchingcontrol.errors && !matchingcontrol.errors.MustMatch){
			return;
		}
		if(control.value !== matchingcontrol.value){
			matchingcontrol.setErrors({MustMatch: true});
		}else{
			matchingcontrol.setErrors(null);
		}

	}
  }