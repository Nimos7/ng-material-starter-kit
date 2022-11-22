import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {combineLatest, Observable, Subject} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {ProductService} from '../../services/product.service';
import {CategoriesOgService} from '../../services/categories-og.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-filtered-product-list-subject',
  templateUrl: './filtered-product-list-subject.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilteredProductListSubjectComponent {
  readonly categories$: Observable<string[]> = this._categoriesOgService.getAll();
  private _categorySubject: Subject<string> = new Subject<string>();
  public category$: Observable<string> = this._categorySubject.asObservable();
  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.category$,
  ]).pipe(
    map(([products, category]) => {
      return products.filter((product) => product.category === category);
    })
  );

  constructor(
    private _productService: ProductService,
    private _categoriesOgService: CategoriesOgService
  ) {
  }

  selectCategory(category: string): void {
    this._categorySubject.next(category);
  }
}
