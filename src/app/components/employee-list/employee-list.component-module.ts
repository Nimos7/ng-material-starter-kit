import {NgModule} from '@angular/core';
import {EmployeeListComponent} from './employee-list.component';
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [
    NgForOf,
    AsyncPipe,
    NgIf,
    JsonPipe,
    FlexModule,
    MatCardModule,
    MatListModule
  ],
  declarations: [EmployeeListComponent],
  providers: [],
  exports: [EmployeeListComponent]
})
export class EmployeeListComponentModule {
}
