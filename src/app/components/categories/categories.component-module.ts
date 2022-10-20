import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CategoriesComponent } from './categories.component';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatListModule} from "@angular/material/list";


@NgModule({
  imports: [
    MatCardModule,
    NgForOf,
    AsyncPipe,
    MatListModule
  ],
  declarations: [CategoriesComponent],
  providers: [],
  exports: [CategoriesComponent]
})
export class CategoriesComponentModule {
}
