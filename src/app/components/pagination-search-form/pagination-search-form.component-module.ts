import {NgModule} from '@angular/core';
import {PaginationSearchFormComponent} from './pagination-search-form.component';
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  imports: [
    MatCardModule, CommonModule, ReactiveFormsModule, MatListModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule
  ],
  declarations: [PaginationSearchFormComponent],
  providers: [],
  exports: [PaginationSearchFormComponent]
})
export class PaginationSearchFormComponentModule {
}
