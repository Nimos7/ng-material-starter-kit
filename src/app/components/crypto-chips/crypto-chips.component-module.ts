import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CryptoChipsComponent } from './crypto-chips.component';
import {MatChipsModule} from "@angular/material/chips";
import {AsyncPipe, CommonModule, JsonPipe, NgIf} from "@angular/common";
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [MatCardModule, MatChipsModule, MatListModule,CommonModule ],
  declarations: [CryptoChipsComponent],
  providers: [],
  exports: [CryptoChipsComponent]
})
export class CryptoChipsComponentModule {
}
