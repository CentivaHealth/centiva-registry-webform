import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalConfig, ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { TOASTR_CONFIG_GLOBAL } from '@core/services/message-handler/toastr.config';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot(<GlobalConfig>TOASTR_CONFIG_GLOBAL),
		ToastContainerModule
	],
	exports: [ToastrModule, ToastContainerModule]
})
export class MessageHandlerWrapperModule {}
