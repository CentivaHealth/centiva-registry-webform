import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IConfig, NgxMaskModule } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
	validation: false
};

@NgModule({
	declarations: [],
	imports: [CommonModule, NgxMaskModule.forRoot()],
	exports: [NgxMaskModule]
})
export class InputMaskWrapperModule {}
