import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Example3DComponent } from './divisions/example3-d/example3-d.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialComponentModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    Example3DComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
