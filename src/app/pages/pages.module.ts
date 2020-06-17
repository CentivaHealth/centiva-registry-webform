import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@pages/login/login/login.component';
import { FormPageComponent } from '@pages/form-page/form-page.component';

@NgModule({
	declarations: [LoginComponent, FormPageComponent],
	imports: [CommonModule]
})
export class PagesModule {}
