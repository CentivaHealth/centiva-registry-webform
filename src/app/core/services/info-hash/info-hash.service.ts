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
import { HashData, MetadataField } from 'centiva-registry-hash-ts';

@Injectable({
	providedIn: 'root'
})
export class InfoHashService {
	url = environment.providerURL;

	constructor(private http: HttpClient) {}

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
		return encodedRequest.buffer.slice(offset, offset + length);
	}

	hashDataString(formData: FormDataModel): string {
		const hash = new SHA3(512);
		hash.update(InfoHashService.formatDataString(formData));
		const encoded = hash.digest();
		return this.convertToHex(encoded);
	}

	private convertToHex(data: Buffer): string {
		return Array.prototype.map
			.call(new Uint8Array(data), (x) => ('00' + x.toString(16)).slice(-2))
			.join('');
	}

	private static formatDataString(data: FormDataModel): string {
    const metadataArr = [];

    const metadataVersion = new MetadataField('version', '2');
    metadataArr.push(metadataVersion);

		const build = HashData.builder()
			.setName(data.name)
			.setSurname(data.surname)
			.setDateOfBirth(data.dateOfBirth)
			.setTestDate(data.testDate)
			.setTestProvider(data.testProvider)
			.setTestResult(data.testResult)
			.setTestLabName(data.testLabName)
      .setMetadata(metadataArr)
			.build();
		return build.toDataString();
	}
}
