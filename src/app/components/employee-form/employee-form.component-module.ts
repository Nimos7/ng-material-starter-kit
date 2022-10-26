import {NgModule} from '@angular/core';
import {EmployeeFormComponent} from './employee-form.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLinkWithHref
  ],
  declarations: [EmployeeFormComponent],
  providers: [],
  exports: [EmployeeFormComponent]
})
export class EmployeeFormComponentModule {
}
