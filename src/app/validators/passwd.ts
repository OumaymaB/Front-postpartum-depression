import { FormControl, FormGroup } from '@angular/forms';

export class PasswordValidator {
// Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
/*static areEqual(formGroup: FormGroup) {
	let val;
	let valid = true;

	for (let key in formGroup.controls) {
		if (formGroup.controls.hasOwnProperty(key)) {
			let control: FormControl = <FormControl>formGroup.controls[key];
			if (val === undefined) {
				val = control.value
			} else {
				if (val !== control.value) {
					valid = false;
					break;
				}
			}
		}
	}
	if (valid) {
		return null;
	}
	return {
		areEqual: true
	}
 }*/
 static passwordsMatch(cg: FormGroup): {[err: string]: any} {
    let pwd1 = cg.get('motdepasse');
    let pwd2 = cg.get('motdepasseconfirm');
    let rv: {[error: string]: any} = {};
    if ((pwd1.touched || pwd2.touched) && pwd1.value !== pwd2.value) {
      rv['passwordMismatch'] = true;
    }
    return rv;
  }
}