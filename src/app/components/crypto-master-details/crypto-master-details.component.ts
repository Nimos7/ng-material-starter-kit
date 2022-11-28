import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {CryptoChipsModel} from '../../models/crypto-chips.model';
import {CryptoChipsService} from '../../services/crypto-chips.service';
import {ProductModel} from "../../models/product.model";
import {map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-crypto-master-details',
  templateUrl: './crypto-master-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoMasterDetailsComponent {
  readonly list$: Observable<CryptoChipsModel[]> = this._cryptoChipsService.getAll();


  constructor(private _cryptoChipsService: CryptoChipsService) {
  }
}
