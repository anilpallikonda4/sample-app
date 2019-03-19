import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpdataComponent } from './empdata/empdata.component';
import {GlobalServiceService } from './global-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GlobalServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
