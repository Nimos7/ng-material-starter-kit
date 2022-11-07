import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {JokesComponent} from './jokes.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
  imports: [MatListModule, CommonModule, MatChipsModule, MatCardModule, MatFormFieldModule, RouterLinkWithHref],
  declarations: [JokesComponent],
  providers: [],
  exports: [JokesComponent]
})
export class JokesComponentModule {
}
