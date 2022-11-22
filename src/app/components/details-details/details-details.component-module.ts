import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DetailsDetailsComponent } from './details-details.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [DetailsDetailsComponent],
  providers: [],
  exports: [DetailsDetailsComponent]
})
export class DetailsDetailsComponentModule {
}
