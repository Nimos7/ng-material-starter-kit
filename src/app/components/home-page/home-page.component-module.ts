import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
    imports: [
        RouterLinkWithHref
    ],
  declarations: [HomePageComponent],
  providers: [],
  exports: [HomePageComponent]
})
export class HomePageComponentModule {
}
