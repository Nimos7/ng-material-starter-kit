import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductTestModel } from '../../models/product-test.model';
import { DetailsTestService } from '../../services/details-test.service';

@Component({
  selector: 'app-details-test',
  templateUrl: './details-test.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsTestComponent {
  readonly list$: Observable<ProductTestModel[]> = this._detailsTestService.getAll();

  constructor(private _detailsTestService: DetailsTestService) {
  }
}
