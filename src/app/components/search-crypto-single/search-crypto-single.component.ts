import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {CryptoChipsService} from '../../services/crypto-chips.service';
import {combineLatest, map, Observable, startWith} from "rxjs";
import {CryptoChipsModel} from "../../models/crypto-chips.model";
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-crypto-single',
  templateUrl: './search-crypto-single.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCryptoSingleComponent {
  readonly autocomplete: FormControl = new FormControl();
  readonly cryptos$: Observable<CryptoChipsModel[]> = combineLatest([
    this.autocomplete.valueChanges.pipe(startWith('')),
    this._cryptoChipsService.getAll()
  ]).pipe(
    map(([autocomplete, cryptos]) => {
      return cryptos.filter((crypto) => crypto.symbol.toLowerCase().includes(autocomplete.toLowerCase())
      )
    })
  )

  constructor(private _cryptoChipsService: CryptoChipsService) {
  }
}
