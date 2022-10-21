import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HolidaysComponent } from './holidays.component';
import {CommonModule} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  imports: [MatCardModule, MatButtonToggleModule, CommonModule, MatInputModule, MatOptionModule, MatSelectModule],
  declarations: [HolidaysComponent],
  providers: [],
  exports: [HolidaysComponent]
})
export class HolidaysComponentModule {
}
