import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {ProductsEmptyStateComponent} from './products-empty-state.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  imports: [CommonModule, MatCardModule, MatListModule, MatProgressSpinnerModule],
  declarations: [ProductsEmptyStateComponent],
  providers: [],
  exports: [ProductsEmptyStateComponent]
})
export class ProductsEmptyStateComponentModule {
}
