import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheeseComponent } from './cheese/cheese.component';
import { BeerComponent } from './beer/beer.component';

@NgModule({
  declarations: [
    AppComponent,
    CheeseComponent,
    BeerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
