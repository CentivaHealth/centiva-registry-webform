import {
	ModuleWithProviders,
	NgModule,
	Optional,
	SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthWrapperModule } from '@core/libs/auth-wrapper/auth-wrapper.module';
import { QrBuilderWrapperModule } from '@core/libs/qr-builder-wrapper/qr-builder-wrapper.module';
import { DatePickerWrapperModule } from '@core/libs/date-picker-wrapper/date-picker-wrapper.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		AuthWrapperModule,
		QrBuilderWrapperModule,
		DatePickerWrapperModule
	],
	exports: [QrBuilderWrapperModule, DatePickerWrapperModule]
})
export class LibsModule {
	constructor(@Optional() @SkipSelf() parentModule?: LibsModule) {
		if (parentModule) {
			throw new Error(
				'Shared Libs module already loaded. Import in root module only.'
			);
		}
	}

	static forRoot(): ModuleWithProviders {
		return {
			ngModule: LibsModule
		};
	}
}
