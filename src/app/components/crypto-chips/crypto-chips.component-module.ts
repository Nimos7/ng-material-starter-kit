import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {CryptoChipsComponent} from './crypto-chips.component';
import {MatChipsModule} from "@angular/material/chips";
import {AsyncPipe, CommonModule, JsonPipe, NgIf} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {RouterLinkWithHref} from "@angular/router";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  imports: [MatCardModule, MatChipsModule, MatListModule, CommonModule, RouterLinkWithHref, MatProgressSpinnerModule],
  declarations: [CryptoChipsComponent],
  providers: [],
  exports: [CryptoChipsComponent]
})
export class CryptoChipsComponentModule {
}
