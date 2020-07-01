import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormDataModel } from '@shared/type-models/form.model';
import { Observable } from 'rxjs';
import SHA3 from 'sha3';
import { health } from '../../../../models/proto/provider-add-info-hash';
import AddInfoHashRequest = health.centiva.registry.model.AddInfoHashRequest;
import IAddInfoHashRequest = health.centiva.registry.model.IAddInfoHashRequest;
import { environment } from '../../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class InfoHashService {
	url = environment.providerURL;

	constructor(private http: HttpClient) {}

	sendInfoHash(data: IAddInfoHashRequest): Observable<ArrayBuffer> {
		const headers = new HttpHeaders({
			Authorization: this.getAccessToken(),
			'Content-Type': 'application/x-protobuf',
			Accept: 'application/x-protobuf'
		});
		return this.http.post(this.url, this.prepareRequestArrayBuffer(data), {
			headers,
			responseType: 'arraybuffer'
		});
	}

	getAccessToken(): string {
		const user = JSON.parse(localStorage.getItem('user'));
		const accessToken = user.stsTokenManager.accessToken;
		return accessToken;
	}

	prepareRequestArrayBuffer(data: IAddInfoHashRequest) {
		const message = AddInfoHashRequest.create(data);
		const encodedRequest = AddInfoHashRequest.encode(message).finish();

		const offset = encodedRequest.byteOffset;
		const length = encodedRequest.byteLength;
		const requestArrayBuffer = encodedRequest.buffer.slice(
			offset,
			offset + length
		);
		return requestArrayBuffer;
	}

	hashDataString(formData: FormDataModel) {
		const hash = new SHA3(512);
		hash.update(this.formatDataString(formData));
		const encoded = hash.digest();
		return encoded;
	}

	formatDataString(data: FormDataModel): string {
		const name = data.name.trim();
		const surName = data.surName.trim();
		const dataString = `name:${name};surname:${surName};dateOfBirth:${data.dateOfBirth};testDate:${data.testDate};testProvider:${data.testProvider};testResult:${data.testResult};labName:MedLab;`;
		return dataString;
	}
}
