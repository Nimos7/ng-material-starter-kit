import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {CryptoMasterDetailsComponent} from './crypto-master-details.component';
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";


@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    CommonModule,
    MatListModule,
    MatGridListModule
  ],
  declarations: [CryptoMasterDetailsComponent],
  providers: [],
  exports: [CryptoMasterDetailsComponent]
})
export class CryptoMasterDetailsComponentModule {
}
