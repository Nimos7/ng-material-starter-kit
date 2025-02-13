import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {RegisterFormComponent} from './register-form.component';
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, RouterLinkWithHref],
  declarations: [RegisterFormComponent],
  providers: [],
  exports: [RegisterFormComponent]
})
export class RegisterFormComponentModule {
}
