import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subject, combineLatest} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {CategoriesTestModel} from '../../models/categories-test.model';
import {ProductTestModel} from '../../models/product-test.model';
import {DetailsTestService} from '../../services/details-test.service';
import {CategoriesTestService} from '../../services/categories-test.service';

@Component({
  selector: 'app-advanced-list',
  templateUrl: './advanced-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedListComponent {
  readonly categories$: Observable<CategoriesTestModel[]> =
    this._categoriesTestService.getAll();

  private _categorySubject: Subject<string> = new Subject<string>();
  public category$: Observable<string> = this._categorySubject.asObservable();
  readonly list$: Observable<ProductTestModel[]> = combineLatest([
    this._detailsTestService.getAll(),
    this.category$,
  ]).pipe(
    map(([products, category]) => {
      return products.filter((product) => product.category === category);
    })
  );

  constructor(
    private _detailsTestService: DetailsTestService,
    private _categoriesTestService: CategoriesTestService,
    private _activatedRoute: ActivatedRoute
  ) {
  }
}
