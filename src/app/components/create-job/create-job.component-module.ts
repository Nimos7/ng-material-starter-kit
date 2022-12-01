import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {CreateJobComponent} from './create-job.component';
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatCheckboxModule],
  declarations: [CreateJobComponent],
  providers: [],
  exports: [CreateJobComponent]
})
export class CreateJobComponentModule {
}
