import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AdvancedListComponent } from './advanced-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [AdvancedListComponent],
  providers: [],
  exports: [AdvancedListComponent]
})
export class AdvancedListComponentModule {
}
