import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {delay, Observable} from 'rxjs';
import {HolidaysModel} from '../../models/holidays.model';
import {HolidaysService} from '../../services/holidays.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-holidays',
  styleUrls: ['./holidays.component.scss'],
  templateUrl: './holidays.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HolidaysComponent {
  readonly holidays$: Observable<HolidaysModel[]> = this._holidaysService.getAll().pipe(
    delay(2000),
    map(() => [])
  );

  constructor(private _holidaysService: HolidaysService) {
  }
}
