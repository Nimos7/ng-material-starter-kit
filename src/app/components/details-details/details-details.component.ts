import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {DetailsTestService} from '../../services/details-test.service';
import {ProductTestModel} from "../../models/product-test.model";

@Component({
  selector: 'app-details-details',
  templateUrl: './details-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsDetailsComponent {
  readonly details$: Observable<ProductTestModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._detailsTestService.getOne(data['id'])));

  constructor(private _detailsTestService: DetailsTestService, private _activatedRoute: ActivatedRoute) {
  }
}
