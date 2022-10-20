import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CategoriesComponent } from './categories.component';
import {AsyncPipe, CommonModule, NgForOf} from "@angular/common";
import {MatListModule} from "@angular/material/list";



@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    CommonModule
  ],
  declarations: [CategoriesComponent],
  providers: [],
  exports: [CategoriesComponent]
})
export class CategoriesComponentModule {
}
