import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { PagesModule } from '@pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, CoreModule.forRoot(), PagesModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
