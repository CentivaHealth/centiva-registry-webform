import { MetadataField } from '@core/services/info-hash-v2/metadata-field';
import { HashDataBuilder } from '@core/services/info-hash-v2/hash-data-builder';

export class HashData {
	readonly name: string;
	readonly surname: string;
	readonly dateOfBirth: string;
	readonly testDate: string;
	readonly testProvider: string;
	readonly testResult: string;
	readonly testLabName: string;
	readonly metadata: MetadataField[];

	constructor(hashDataBuilder: HashDataBuilder) {
		if (
			!hashDataBuilder.getName() ||
			!hashDataBuilder.getSurname() ||
			!hashDataBuilder.getDateOfBirth() ||
			!hashDataBuilder.getTestDate() ||
			!hashDataBuilder.getTestProvider() ||
			!hashDataBuilder.getTestResult() ||
			!hashDataBuilder.getTestLabName()
		) {
			throw new Error('Data is not valid');
		}
		this.name = hashDataBuilder.getName();
		this.surname = hashDataBuilder.getSurname();
		this.dateOfBirth = hashDataBuilder.getDateOfBirth();
		this.testDate = hashDataBuilder.getTestDate();
		this.testProvider = hashDataBuilder.getTestProvider();
		this.testResult = hashDataBuilder.getTestResult();
		this.testLabName = hashDataBuilder.getTestLabName();
		this.metadata = hashDataBuilder.getMetadata();
	}

	static builder(): HashDataBuilder {
		return new HashDataBuilder();
	}

	public toDataString(): string {
		if (
			!this.name ||
			!this.surname ||
			!this.dateOfBirth ||
			!this.testDate ||
			!this.testProvider ||
			!this.testResult ||
			!this.testLabName
		) {
			throw new Error('Data is not valid');
		}

		const keys: string[] = Object.keys(this);
		const keysSorted = keys.sort();
		let dataString = '';
		for (const key of keysSorted) {
			if (key !== 'metadata' && this[key] !== undefined && this[key] != null) {
				dataString += `${key}:${this[key]};`;
			}
		}

		if (this.metadata) {
			for (const metaField of this.metadata) {
				dataString += metaField.value;
			}
		}
		return dataString;
	}
}
