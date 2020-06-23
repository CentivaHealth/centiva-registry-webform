import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
	declarations: [],
	imports: [CommonModule, QRCodeModule],
	exports: [QRCodeModule]
})
export class QrBuilderWrapperModule {}
