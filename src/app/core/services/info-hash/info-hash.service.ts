import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormDataModel } from '@shared/type-models/form.model';
import { Observable } from 'rxjs';
import SHA3 from 'sha3';
import {
	AddInfoHashRequestData,
	AddInfoHashRequestModel
} from '@models/provider-add-info-hash.model';
import { environment } from '@environments/environment';
import { MessageHandlerService } from '@core/services/message-handler/message-handler.service';

@Injectable({
	providedIn: 'root'
})
export class InfoHashService {
	url = environment.providerURL;

	constructor(
		private http: HttpClient,
		private messageHandlerService: MessageHandlerService
	) {}

	sendInfoHash(data: AddInfoHashRequestData): Observable<ArrayBuffer> {
		const headers = new HttpHeaders({
			Authorization: this.getIdToken(),
			'Content-Type': 'application/x-protobuf',
			Accept: 'application/x-protobuf'
		});
		return this.http.post(this.url, this.prepareRequestArrayBuffer(data), {
			headers,
			responseType: 'arraybuffer'
		});
	}

	getIdToken(): string {
		return localStorage.getItem('idToken');
	}

	prepareRequestArrayBuffer(data: AddInfoHashRequestData) {
		const addInfoHashRequestModel = new AddInfoHashRequestModel();
		const encodedRequest = addInfoHashRequestModel
			.toAddInfoHashRequestProto(data)
			.serializeBinary();

		const offset = encodedRequest.byteOffset;
		const length = encodedRequest.byteLength;
		const requestArrayBuffer = encodedRequest.buffer.slice(
			offset,
			offset + length
		);
		return requestArrayBuffer;
	}

	hashDataString(formData: FormDataModel): string {
		const hash = new SHA3(512);
		hash.update(this.formatDataString(formData));
		const encoded = hash.digest();
		return this.convertToHex(encoded);
	}

	private convertToHex(data: Buffer): string {
		return Array.prototype.map
			.call(new Uint8Array(data), (x) => ('00' + x.toString(16)).slice(-2))
			.join('');
	}

	formatDataString(data: FormDataModel): string {
		if (
			!data ||
			!data.name ||
			!data.surname ||
			!data.dateOfBirth ||
			!data.testDate ||
			!data.testProvider ||
			!data.testResult ||
			!data.testLabName
		) {
			this.messageHandlerService.errorMessage('Incorrect data');
			return;
		}
		const name = data.name.trim();
		const surname = data.surname.trim();
		const dataString = `name:${name};surname:${surname};dateOfBirth:${data.dateOfBirth};testDate:${data.testDate};testProvider:${data.testProvider};testResult:${data.testResult};labName:${data.testLabName};`;
		return dataString;
	}
}
