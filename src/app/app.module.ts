import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {ProductListComponentModule} from "./components/product-list/product-list.component-module";
import {HomePageComponentModule} from "./components/home-page/home-page.component-module";
import {JokesComponentModule} from "./components/jokes/jokes.component-module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProductListComponentModule,
    HomePageComponentModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
