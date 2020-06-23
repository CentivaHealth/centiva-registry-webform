import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';

@NgModule({
	declarations: [],
	imports: [CommonModule, MomentModule],
  exports: [MomentModule]
})
export class DateTimePipesWrapperModule {}
