import {NgModule} from '@angular/core';
import {CreateUserWithRoleRadioButtonsComponent} from './create-user-with-role-radio-buttons.component';
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  imports: [
    MatCardModule, CommonModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatRadioModule
  ],
  declarations: [CreateUserWithRoleRadioButtonsComponent],
  providers: [],
  exports: [CreateUserWithRoleRadioButtonsComponent]
})
export class CreateUserWithRoleRadioButtonsComponentModule {
}
