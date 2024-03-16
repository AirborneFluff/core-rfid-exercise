import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClassRegistrationReportsComponent } from './components/class-registration-reports/class-registration-reports.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassRegistrationReportsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
