import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {delay, Observable} from 'rxjs';
import {CryptoChipsModel} from '../../models/crypto-chips.model';
import {CryptoChipsService} from '../../services/crypto-chips.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-crypto-chips',
  styleUrls: ['./crypto-chips.component.scss'],
  templateUrl: './crypto-chips.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoChipsComponent {
  readonly crypto$: Observable<CryptoChipsModel[]> = this._cryptoChipsService.getAll().pipe(
    delay(2000),
    map(() => [])
  );

  constructor(private _cryptoChipsService: CryptoChipsService) {
  }
}
