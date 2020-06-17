import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from '@pages/pages.module';
import { LibsModule } from '@core/libs/libs.module';

@NgModule({
	declarations: [],
	imports: [CommonModule, PagesModule, LibsModule]
})
export class CoreModule {}
