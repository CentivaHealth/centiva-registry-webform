import { MetadataField } from '@core/services/info-hash-v2/metadata-field';

export class HashDataBuilder {
	private name: string;
	private surname: string;
	private dateOfBirth: string;
	private testDate: string;
	private testProvider: string;
	private testResult: string;
	private testLabName: string;
	private metadata: MetadataField[];

	public setName(value: string): HashDataBuilder {
		this.name = value;
		return this;
	}

	public getName(): string {
		return this.name;
	}

	public setSurname(value: string): HashDataBuilder {
		this.surname = value;
		return this;
	}

	public getSurname(): string {
		return this.surname;
	}

	public setDateOfBirth(value: string): HashDataBuilder {
		this.dateOfBirth = value;
		return this;
	}

	public getDateOfBirth(): string {
		return this.dateOfBirth;
	}

	public setTestDate(value: string): HashDataBuilder {
		this.testDate = value;
		return this;
	}

	public getTestDate(): string {
		return this.testDate;
	}

	public setTestProvider(value: string): HashDataBuilder {
		this.testProvider = value;
		return this;
	}

	public getTestProvider(): string {
		return this.testProvider;
	}

	public setTestResult(value: string): HashDataBuilder {
		this.testResult = value;
		return this;
	}

	public getTestResult(): string {
		return this.testResult;
	}

	public setTestLabName(value: string): HashDataBuilder {
		this.testLabName = value;
		return this;
	}

	public getTestLabName(): string {
		return this.testLabName;
	}

	public setMetadata(value: MetadataField[]): HashDataBuilder {
		this.metadata = value;
		return this;
	}

	public getMetadata(): MetadataField[] {
		return this.metadata;
	}

	public build(): HashDataBuilder {
		return this;
	}
}
