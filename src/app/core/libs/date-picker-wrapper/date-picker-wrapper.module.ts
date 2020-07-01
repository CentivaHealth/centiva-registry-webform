import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
	declarations: [],
	imports: [CommonModule, OwlDateTimeModule, OwlNativeDateTimeModule],
	exports: [OwlDateTimeModule, OwlNativeDateTimeModule]
})
export class DatePickerWrapperModule {}
