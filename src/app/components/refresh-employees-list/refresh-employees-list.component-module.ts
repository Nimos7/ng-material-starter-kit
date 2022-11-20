import {NgModule} from '@angular/core';
import {RefreshEmployeesListComponent} from './refresh-employees-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {AsyncPipe, NgForOf} from "@angular/common";

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    AsyncPipe,
    NgForOf
  ],
  declarations: [RefreshEmployeesListComponent],
  providers: [],
  exports: [RefreshEmployeesListComponent]
})
export class RefreshEmployeesListComponentModule {
}
