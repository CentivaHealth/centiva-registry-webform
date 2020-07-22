import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { PagesModule } from '@pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, CoreModule.forRoot(), PagesModule, NgxMaskModule.forRoot()],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
