import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LibsModule } from '@core/libs/libs.module';

const IMPORTS = [CommonModule, ReactiveFormsModule, LibsModule];

@NgModule({
	declarations: [],
	imports: [...IMPORTS],
	exports: [...IMPORTS]
})
export class SharedModule {}
