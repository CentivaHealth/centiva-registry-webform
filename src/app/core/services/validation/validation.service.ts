import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class ValidationService {
	constructor() {}

	setValidators(): ValidatorFn[] {
		const validators: ValidatorFn[] = [];
		validators.push(Validators.minLength(3));
		validators.push(Validators.required);
		validators.push(Validators.maxLength(255));
		validators.push(this.checkSpaces());
		return validators;
	}

	private checkSpaces(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: any } => {
			if (control.value !== '') {
				return control.value.trim().length !== 0
					? null
					: { whitespace: 'value is only whitespace' };
			}
			return null;
		};
	}
}
