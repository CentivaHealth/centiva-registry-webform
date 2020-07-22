import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import {
	TOASTR_CONFIG_INLINE,
	TOASTR_CONFIG_LOCAL
} from '@core/services/message-handler/toastr.config';
import {ErrorResponse} from '@generated/error_response_pb';

@Injectable({
	providedIn: 'root'
})
export class MessageHandlerService {
	private config: Partial<IndividualConfig> = <Partial<IndividualConfig>>(
		TOASTR_CONFIG_LOCAL
	);

	private inlineConfig: Partial<IndividualConfig> = <Partial<IndividualConfig>>(
		TOASTR_CONFIG_INLINE
	);
	constructor(private toastrService: ToastrService) {}

	successMessage(message): void {
		const toasterTitle = 'Success!';
		const toasterMessage = message;
		this.toastrService.success(toasterMessage, toasterTitle, this.config);
	}

	errorMessage(message): void {
		const toasterTitle = 'Woops!';
		const toasterMessage = message;
		this.toastrService.error(toasterMessage, toasterTitle, this.config);
	}

	decodedErrorMessage(message): void {
		const toasterTitle = 'Woops!';
		const toasterMessage = this.decodeMessage(message);
		this.toastrService.error(toasterMessage, toasterTitle, this.config);
	}

	decodeMessage(error): string {
		const err = ErrorResponse.deserializeBinary(
			new Uint8Array(error.error)
		).getMessage();
		return err;
	}
}
