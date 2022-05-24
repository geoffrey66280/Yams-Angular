import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { calculsService } from './services/calculs.service';
import { YamsPageComponent } from './yams-page/yams-page.component';

@NgModule({
  declarations: [
    AppComponent,
    YamsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [calculsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
