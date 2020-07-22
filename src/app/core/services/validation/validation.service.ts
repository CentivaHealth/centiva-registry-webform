import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import * as moment from 'moment';

@Injectable({
	providedIn: 'root'
})
export class ValidationService {
	constructor() {}

	setValidators(type: string): ValidatorFn[] {
		const emailPattern =
			'^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
		const validators: ValidatorFn[] = [];
		if (type === 'text') {
			validators.push(Validators.minLength(3));
			validators.push(Validators.required);
			validators.push(Validators.maxLength(255));
			validators.push(this.checkSpaces());
		}

		if (type === 'email') {
			validators.push(Validators.email);
			validators.push(Validators.minLength(6));
			validators.push(Validators.pattern(emailPattern));
			validators.push(Validators.required);
		}
		if (type === 'date') {
			validators.push(Validators.minLength(5));
			validators.push(this.checkMaxDate());
			validators.push(Validators.required);
		}

		if (type === 'select') {
			validators.push(Validators.required);
		}

		return validators;
	}

	private checkMaxDate(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: any } => {
			if (control.value) {
				const dateFormat = 'YYYYMMDD';
				const todayDate = moment(new Date()).format(dateFormat);
				return Number(control.value) <= Number(todayDate)
					? null
					: { date: 'Date cannot be greater than today' };
			}
			return null;
		};
	}

	private checkSpaces(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: any } => {
			if (control.value) {
				return control.value.trim().length !== 0
					? null
					: { whitespace: 'value is only whitespace' };
			}
			return null;
		};
	}
}
