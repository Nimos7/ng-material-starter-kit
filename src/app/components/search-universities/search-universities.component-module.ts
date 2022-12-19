import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { SearchUniversitiesComponent } from './search-universities.component';

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, CommonModule],
  declarations: [SearchUniversitiesComponent],
  providers: [],
  exports: [SearchUniversitiesComponent]
})
export class SearchUniversitiesComponentModule {
}
