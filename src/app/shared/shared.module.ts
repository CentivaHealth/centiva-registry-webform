import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LibsModule } from '@core/libs/libs.module';

@NgModule({
	declarations: [],
	imports: [CommonModule, ReactiveFormsModule, LibsModule],
	exports: [ReactiveFormsModule, LibsModule]
})
export class SharedModule {}
