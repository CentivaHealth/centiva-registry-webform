import {
	ModuleWithProviders,
	NgModule,
	Optional,
	SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@core/services/auth/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [],
	imports: [CommonModule, BrowserAnimationsModule, HttpClientModule],
	providers: [AuthService]
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
		if (parentModule) {
			throw new Error('CoreModule already loaded. Import in root module only.');
		}
	}

	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CoreModule
		};
	}
}
