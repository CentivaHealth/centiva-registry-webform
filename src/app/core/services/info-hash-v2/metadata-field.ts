export class MetadataField {
	readonly key: string;
	readonly value: string;

	constructor(key: string, value: string) {
		if (key === undefined || key === null || key.trim() === '') {
			throw new Error('Key should not be blank or empty');
		}
		if (value === undefined || value === null || value.trim() === '') {
			throw new Error('Value should not be blank or empty');
		}
		this.key = key;
		this.value = value;
	}
}
