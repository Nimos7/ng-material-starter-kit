import {NgModule} from '@angular/core';
import {CryptoMasterDetailsComponent} from './crypto-master-details.component';
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    MatListModule,
    MatGridListModule,
    NgForOf,
    AsyncPipe,
    MatButtonModule
  ],
  declarations: [CryptoMasterDetailsComponent],
  providers: [],
  exports: [CryptoMasterDetailsComponent]
})
export class CryptoMasterDetailsComponentModule {
}
