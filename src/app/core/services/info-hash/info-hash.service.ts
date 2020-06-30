import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { health } from '../../../../models/proto/provider-add-info-hash';
import AddInfoHashRequest = health.centiva.registry.model.AddInfoHashRequest;

@Injectable({
	providedIn: 'root'
})
export class InfoHashService {
	constructor(private http: HttpClient) {}

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
		let decoded = AddInfoHashRequest.decode(buffer);
		console.log(`encoded = ${buffer}`);
		console.log(`decoded = ${JSON.stringify(decoded)}`);

		const user = localStorage.getItem('user')
    console.log(user);

    const testToken =
			'eyJhbGciOiJSUzI1NiIsImtpZCI6IjdkNTU0ZjBjMTJjNjQ3MGZiMTg1MmY3OWRiZjY0ZjhjODQzYmIxZDciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVnaXN0cnktdGVzdC0yODA3MTMiLCJhdWQiOiJyZWdpc3RyeS10ZXN0LTI4MDcxMyIsImF1dGhfdGltZSI6MTU5MzE5NDAyNCwidXNlcl9pZCI6IjhTUGMyb040Z05UY2E1MHpFWnNPYnhja3dybTEiLCJzdWIiOiI4U1BjMm9ONGdOVGNhNTB6RVpzT2J4Y2t3cm0xIiwiaWF0IjoxNTkzMTk0MDI0LCJleHAiOjE1OTMxOTc2MjQsImVtYWlsIjoicXdlQHF3ZS5xd2UiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicXdlQHF3ZS5xd2UiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TUYxgGpKeON-Hn-kY7PaGHzfi_CgE8hhJYYhnHeM2AYErt5RbhFx9t2HbHABr37wPGMzMjPj__wQre7MhIA10tTC6hNK5c7uX9Hvi2osdDOxhTC-yr9x-XwDrNBfAfYdSvz1Npw3p0Eg71jJoyMaWZUiU_62XoantW95bARPicxy_AL97RgOLG4wQWYQBPFZhMm_IcuKCLh_9HVR-9RLta4lMti0Dl1FTtxpuTtWRIdNG7W2N8yy3-XApUXDc9C6fN2RW-eXNSwwaqhrw2y50rJcjUBQgMtyZ6c-rFDjRmedbjt-FY2SXJm8tvWA0lm6bpoVIAvlmZSesLwg5KJK7A';
		const testURL =
			'https://europe-west6-registry-test-280713.cloudfunctions.net/provider-add-info-hash';

		const headers = new HttpHeaders({
			Authorization: testToken,
			Accept: 'application/x-protobuf',
			'Content-type': 'application/x-protobuf'
		});
		this.http
			.post(testURL, buffer, { headers, responseType: 'arraybuffer' })
			.subscribe(console.log);
	}
}
