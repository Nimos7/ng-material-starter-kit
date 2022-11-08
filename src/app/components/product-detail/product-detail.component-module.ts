import {NgModule} from '@angular/core';
import {ProductDetailComponent} from './product-detail.component';
import {MatCardModule} from "@angular/material/card";
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [
    MatCardModule,
    AsyncPipe,
    NgIf
  ],
  declarations: [ProductDetailComponent],
  providers: [],
  exports: [ProductDetailComponent]
})
export class ProductDetailComponentModule {
}
