import {NgModule} from '@angular/core';
import {EmployeesMasterDetailsComponent} from './employees-master-details.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {AsyncPipe, CommonModule, NgForOf, NgIf} from "@angular/common";

@NgModule({
  imports: [
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    AsyncPipe,
    NgForOf,
    NgIf,
    CommonModule
  ],
  declarations: [EmployeesMasterDetailsComponent],
  providers: [],
  exports: [EmployeesMasterDetailsComponent]
})
export class EmployeesMasterDetailsComponentModule {
}
