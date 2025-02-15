import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {CategoriesComponent} from './categories.component';
import {AsyncPipe, CommonModule, NgForOf} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {RouterLinkWithHref} from "@angular/router";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    CommonModule,
    RouterLinkWithHref,
    MatProgressSpinnerModule
  ],
  declarations: [CategoriesComponent],
  providers: [],
  exports: [CategoriesComponent]
})
export class CategoriesComponentModule {
}
