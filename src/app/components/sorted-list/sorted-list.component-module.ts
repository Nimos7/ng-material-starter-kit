import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { SortedListComponent } from './sorted-list.component';

@NgModule({
  imports: [MatButtonToggleModule, MatCardModule, MatListModule, FlexModule, CommonModule],
  declarations: [SortedListComponent],
  providers: [],
  exports: [SortedListComponent]
})
export class SortedListComponentModule {
}
