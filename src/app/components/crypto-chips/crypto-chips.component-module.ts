import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CryptoChipsComponent } from './crypto-chips.component';
import {MatChipsModule} from "@angular/material/chips";
import {AsyncPipe, CommonModule, JsonPipe, NgIf} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
    imports: [MatCardModule, MatChipsModule, MatListModule, CommonModule, RouterLinkWithHref],
  declarations: [CryptoChipsComponent],
  providers: [],
  exports: [CryptoChipsComponent]
})
export class CryptoChipsComponentModule {
}
