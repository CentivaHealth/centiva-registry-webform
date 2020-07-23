import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
	declarations: [],
	imports: [CommonModule, NgxMaskModule.forRoot()],
	exports: [NgxMaskModule]
})
export class InputMaskWrapperModule {}
