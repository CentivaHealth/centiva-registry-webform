import { Injectable } from '@angular/core';
import { health } from '../../../../models/proto/provider-add-info-hash';
import AddInfoHashRequest = health.centiva.registry.model.AddInfoHashRequest;

@Injectable({
	providedIn: 'root'
})
export class InfoHashService {
	constructor() {}

	 sendInfoHash(infoHash) {
		const byteTest = new Uint8Array(10);

		const testData = {
			infoHash: byteTest,
			labId: 'lab id',
			labName: 'lab name',
			creationDate: {}
		};
		// const webformInfoHashModel = new WebformInfoHashModel();
		// const body = {
		// 	message: webformInfoHashModel
		// 		.toWebformInfoHashProto(infoHash)
		// 		.serializeBinary()
		// };
		let message = AddInfoHashRequest.create(testData);
		let buffer = AddInfoHashRequest.encode(message).finish();
		let decoded = AddInfoHashRequest.decode(buffer);
		console.log(`encoded = ${buffer}`);
		console.log(`decoded = ${JSON.stringify(decoded)}`);
	}
}
