import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {SearchCryptoSingleComponent} from './search-crypto-single.component';
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";

@NgModule({
  imports: [MatCardModule, CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatAutocompleteModule],
  declarations: [SearchCryptoSingleComponent],
  providers: [],
  exports: [SearchCryptoSingleComponent]
})
export class SearchCryptoSingleComponentModule {
}
