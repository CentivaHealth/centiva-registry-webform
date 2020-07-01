import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import {
	TOASTR_CONFIG_INLINE,
	TOASTR_CONFIG_LOCAL
} from '@core/services/message-handler/toastr.config';
import { health } from '../../../../models/proto/error-response';
import ErrorResponse = health.centiva.registry.model.ErrorResponse;

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

	decodeMessage(errorMessage): string {
		return ErrorResponse.decode(new Uint8Array(errorMessage.error)).message;
	}

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
}
