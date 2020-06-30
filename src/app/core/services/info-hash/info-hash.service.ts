import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormDataModel } from '@shared/type-models/form.model';
import SHA3 from 'sha3';
import { health } from '../../../../models/proto/provider-add-info-hash';
import AddInfoHashRequest = health.centiva.registry.model.AddInfoHashRequest;

@Injectable({
	providedIn: 'root'
})
export class InfoHashService {
	constructor(private http: HttpClient) {}
	url =
		'https://europe-west6-registry-test-280713.cloudfunctions.net/provider-add-info-hash';

	sendInfoHash(infoHash) {
		const byteTest = new Uint8Array(10);

		const testData = {
			infoHash: byteTest,
			labId: 'lab id',
			labName: 'lab name',
			creationDate: {}
		};
		let message = AddInfoHashRequest.create(testData);
		let buffer = AddInfoHashRequest.encode(message).finish();

		const user = JSON.parse(localStorage.getItem('user'));
		const accessToken = user.stsTokenManager.accessToken;

		const headers = new HttpHeaders({
			Authorization: accessToken,
			Accept: 'application/x-protobuf',
			'Content-type': 'application/x-protobuf'
		});
		this.http
			.post(this.url, buffer, { headers, responseType: 'arraybuffer' })
			.subscribe(console.log);
	}

	hashDataString(formData: FormDataModel): string {
		const hash = new SHA3(512);
		hash.update(this.formatDataString(formData));
		const encoded = hash.digest('hex');
		console.log(encoded);
		return encoded;
	}

	formatDataString(data: FormDataModel): string {
		const name = data.name.trim();
		const surName = data.surName.trim();
		const dataString = `name:${name};surname:${surName};dateOfBirth:${data.dateOfBirth};testDate:${data.testDate};testProvider:${data.testProvider};testResult:${data.testResult}`;
		return dataString;
	}
}
