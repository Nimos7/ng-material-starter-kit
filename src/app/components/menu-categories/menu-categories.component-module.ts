import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MenuCategoriesComponent } from './menu-categories.component';
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
  imports: [MatButtonToggleModule, MatCardModule, CommonModule, MatButtonModule, MatMenuModule, RouterLinkWithHref],
  declarations: [MenuCategoriesComponent],
  providers: [],
  exports: [MenuCategoriesComponent]
})
export class MenuCategoriesComponentModule {
}
