import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthWrapperModule } from '@core/libs/auth-wrapper/auth-wrapper.module';
import { QrBuilderWrapperModule } from '@core/libs/qr-builder-wrapper/qr-builder-wrapper.module';
import { DatePickerWrapperModule } from '@core/libs/date-picker-wrapper/date-picker-wrapper.module';
import { DateTimePipesWrapperModule } from '@core/libs/date-time-pipes-wrapper/date-time-pipes-wrapper.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		AuthWrapperModule,
		QrBuilderWrapperModule,
		DatePickerWrapperModule,
		DateTimePipesWrapperModule
	],
	exports: [
		QrBuilderWrapperModule,
		DatePickerWrapperModule,
		DateTimePipesWrapperModule
	]
})
export class LibsModule {
	constructor() {}
}
