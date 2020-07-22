import { AddInfoHashRequest } from '@generated//provider_add_info_hash_pb';

export interface AddInfoHashRequestData {
	infoHash: Uint8Array | string;
	testProvider: string;
	version: string;
	testDate: string;
	testResult: string;
}

export class AddInfoHashRequestModel {
	infoHash: Uint8Array | string;
	testProvider: string;
	version: string;
	testDate: string;
	testResult: string;
	constructor() {}

	toAddInfoHashRequestProto(data): AddInfoHashRequest {
		const pubAddInfoHashRequest: AddInfoHashRequest = new AddInfoHashRequest();
		pubAddInfoHashRequest.setInfoHash(data.infoHash);
		pubAddInfoHashRequest.setTestProvider(data.testProvider);
		pubAddInfoHashRequest.setVersion(data.version);
		pubAddInfoHashRequest.setTestDate(data.testDate);
		pubAddInfoHashRequest.setTestResult(data.testResult);
		return pubAddInfoHashRequest;
	}
}
