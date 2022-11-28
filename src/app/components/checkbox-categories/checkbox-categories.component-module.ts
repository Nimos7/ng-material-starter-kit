import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';
import {CheckboxCategoriesComponent} from './checkbox-categories.component';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {RouterLinkWithHref} from "@angular/router";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  imports: [MatCardModule, MatButtonToggleModule, MatTableModule, AsyncPipe, MatCheckboxModule, NgForOf, RouterLinkWithHref, NgIf, MatProgressSpinnerModule],
  declarations: [CheckboxCategoriesComponent],
  providers: [],
  exports: [CheckboxCategoriesComponent]
})
export class CheckboxCategoriesComponentModule {
}
