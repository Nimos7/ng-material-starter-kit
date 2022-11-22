import {NgModule} from '@angular/core';
import {CryptoMasterDetailsComponent} from './crypto-master-details.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {AsyncPipe, NgForOf} from "@angular/common";

@NgModule({
  imports: [
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    AsyncPipe,
    NgForOf
  ],
  declarations: [CryptoMasterDetailsComponent],
  providers: [],
  exports: [CryptoMasterDetailsComponent]
})
export class CryptoMasterDetailsComponentModule {
}
