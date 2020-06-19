import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from '@pages/pages.module';
import { LibsModule } from '@core/libs/libs.module';
import { AuthService } from '@core/services/auth/auth.service';

@NgModule({
	declarations: [],
	imports: [CommonModule, PagesModule, LibsModule],
	providers: [AuthService]
})
export class CoreModule {}
