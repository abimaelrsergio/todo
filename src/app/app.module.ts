import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AbimaelComponent } from './abimael/abimael.component';
import { SergioComponent } from './sergio/sergio.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AbimaelComponent,
    SergioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
