import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {CryptoChipsModel} from '../../models/crypto-chips.model';
import {CryptoChipsService} from '../../services/crypto-chips.service';

@Component({
  selector: 'app-crypto-master-details',
  templateUrl: './crypto-master-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoMasterDetailsComponent {
  readonly list$: Observable<CryptoChipsModel[]> = this._cryptoChipsService.getAll();
  private _detailsSubject: Subject<string> = new Subject<string>();
  public details$: Observable<string> = this._detailsSubject.asObservable();

  constructor(private _cryptoChipsService: CryptoChipsService) {
  }


  showDetails(price: string): void {
    return this._detailsSubject.next(price)
  }
}

