import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {FlexModule} from '@angular/flex-layout/flex';
import {AdvancedListComponent} from './advanced-list.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, FlexModule, MatIconModule],
  declarations: [AdvancedListComponent],
  providers: [],
  exports: [AdvancedListComponent]
})
export class AdvancedListComponentModule {
}
