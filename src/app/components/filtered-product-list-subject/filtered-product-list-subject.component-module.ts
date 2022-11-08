import {NgModule} from '@angular/core';
import {FilteredProductListSubjectComponent} from './filtered-product-list-subject.component';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {FlexModule} from "@angular/flex-layout";
import {AsyncPipe, NgForOf} from "@angular/common";

@NgModule({
  imports: [
    MatListModule,
    MatCardModule,
    RouterLink,
    FlexModule,
    AsyncPipe,
    NgForOf
  ],
  declarations: [FilteredProductListSubjectComponent],
  providers: [],
  exports: [FilteredProductListSubjectComponent]
})
export class FilteredProductListSubjectComponentModule {
}
