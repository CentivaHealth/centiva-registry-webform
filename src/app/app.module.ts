import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { PagesModule } from '@pages/pages.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

const DECLARATIONS = [AppComponent];

const IMPORTS = [
	BrowserModule,
	AppRoutingModule,
	CoreModule.forRoot(),
	PagesModule
];

@NgModule({
	declarations: [...DECLARATIONS],
	imports: [...IMPORTS],
	bootstrap: [AppComponent]
})
export class AppModule {}
