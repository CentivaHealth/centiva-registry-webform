import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@pages/login/login/login.component';
import { FormPageComponent } from '@pages/form-page/form-page.component';
import { SharedModule } from '@shared/shared.module';

const DECLARATIONS = [LoginComponent, FormPageComponent];
const IMPORTS = [CommonModule, SharedModule];

@NgModule({
	declarations: [...DECLARATIONS],
	imports: [...IMPORTS]
})
export class PagesModule {}
