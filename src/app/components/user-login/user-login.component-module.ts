import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserLoginComponent } from './user-login.component';
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, RouterLinkWithHref],
  declarations: [UserLoginComponent],
  providers: [],
  exports: [UserLoginComponent]
})
export class UserLoginComponentModule {
}
