import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {CategoriesOgService} from '../../services/categories-og.service';
import {ProductService} from '../../services/product.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-filtered-product-list',
  templateUrl: './filtered-product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredProductListComponent {
  readonly categories$: Observable<string[]> = this._categoriesOgService.getAll();
  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this._activatedRoute.params
  ]).pipe(
    map(([products, params]) => {
      return products.filter((product) => product.category === params ['category']);
    }))

  constructor(private _categoriesOgService: CategoriesOgService, private _productService: ProductService, private _activatedRoute: ActivatedRoute) {
  }
}
