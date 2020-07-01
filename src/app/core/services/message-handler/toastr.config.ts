import { GlobalToastrConfig, IndividualToastrConfig } from 'ngx-toastr';

export const TOASTR_CONFIG_GLOBAL: Partial<GlobalToastrConfig> = {
	iconClasses: {
		error: 'toast-error',
		warning: 'toast-warning toast-warning-custom',
		success: 'toast-success',
		info: 'toast-info'
	},
	preventDuplicates: true
};

export const TOASTR_CONFIG_LOCAL: Partial<IndividualToastrConfig> = {
	closeButton: true,
	progressBar: true,
	positionClass: 'toast-top-right',
	timeOut: 5000
};

export const TOASTR_CONFIG_INLINE: Partial<IndividualToastrConfig> = {
	positionClass: 'toast-inline',
	disableTimeOut: true,
	closeButton: true,
	tapToDismiss: false,
	timeOut: 0
};
