import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {DetailsTestComponent} from './details-test.component';
import {RouterLink, RouterLinkWithHref} from "@angular/router";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, RouterLinkWithHref, RouterLink],
  declarations: [DetailsTestComponent],
  providers: [],
  exports: [DetailsTestComponent]
})
export class DetailsTestComponentModule {
}
