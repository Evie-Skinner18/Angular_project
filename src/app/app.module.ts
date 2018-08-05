import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { CheeseComponent } from './cheese/cheese.component';
import { BeerComponent } from './beer/beer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CheeseComponent,
    BeerComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'app-root',
        component: AppComponent
      },
      {
      path: 'app-cheese',
      component : CheeseComponent
    },{
      path: 'app-beer',
      component : BeerComponent
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
