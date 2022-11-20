import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import {ProductMasterListComponent} from './product-master-list.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatButtonToggleModule, MatGridListModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [ProductMasterListComponent],
  providers: [],
  exports: [ProductMasterListComponent]
})
export class ProductMasterListComponentModule {
}
