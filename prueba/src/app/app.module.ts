import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { LogInComponent } from './componente/log-in/log-in.component';
import { LogInStemdoComponent } from './componente/log-in-stemdo/log-in-stemdo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    LogInStemdoComponent,
  ],
  imports: [
    BrowserModule,
    Router,
    HttpClientModule,
    NgxGoogleAnalyticsModule.forRoot('G-5B3HKFB3VH'),
    NgxGoogleAnalyticsRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }