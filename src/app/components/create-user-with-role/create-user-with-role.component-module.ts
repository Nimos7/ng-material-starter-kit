import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {CreateUserWithRoleComponent} from './create-user-with-role.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatMenuModule, MatSelectModule],
  declarations: [CreateUserWithRoleComponent],
  providers: [],
  exports: [CreateUserWithRoleComponent]
})
export class CreateUserWithRoleComponentModule {
}
