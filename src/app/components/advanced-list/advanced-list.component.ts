import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subject, combineLatest, of, switchMap, BehaviorSubject} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {CategoriesTestModel} from '../../models/categories-test.model';
import {ProductTestModel} from '../../models/product-test.model';
import {DetailsTestService} from '../../services/details-test.service';
import {CategoriesTestService} from '../../services/categories-test.service';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-advanced-list',
  templateUrl: './advanced-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedListComponent {
  readonly categories$: Observable<string[]> = this._categoriesTestService
    .getAll()
    .pipe(
      map((categories) => {
        return categories.filter(
          (category) =>
            category === "men's clothing" || category === "women's clothing"
        );
      })
    );
  private _categorySubject: Subject<string> = new Subject<string>();


  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('Sort  price UP');

  public order$: Observable<string> = this._orderSubject.asObservable();

  readonly productList$: Observable<ProductTestModel[]> = combineLatest([
    this._categorySubject.asObservable(),
    this._orderSubject.asObservable()
  ]).pipe(
    switchMap(([category, age]) => this._detailsTestService.getAll().pipe(
      map((products) => products.filter((product) => product.category === category))
      , map((list) => {
        return list.sort((a, b) => {
          if (a.price > b.price) return age === 'Sort  price UP' ? 1 : -1;
          if (a.price < b.price) return age === 'Sort  price DOWN' ? 1 : -1;
          return 0
        })
      }))
    )
  );
  public orders: Observable<string[]> = of(['Sort  price UP', 'Sort  price DOWN']);

  constructor(
    private _detailsTestService: DetailsTestService,
    private _categoriesTestService: CategoriesTestService,
    private _activatedRoute: ActivatedRoute
  ) {
  }

  selectCategory(category: string): void {
    this._categorySubject.next(category);
  }

  sortByPrice(order: string): void {
    this._orderSubject.next(order)
  }

  delete(id: number): void {
    this._detailsTestService.delete(id).subscribe()
  }
}

