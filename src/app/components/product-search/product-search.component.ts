import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BehaviorSubject, Observable, combineLatest, debounceTime, map, filter, startWith} from 'rxjs';

import {ProductModel} from '../../models/product.model';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSearchComponent {

  readonly search: FormGroup = new FormGroup({title: new FormControl()});
  readonly startWith$: Observable<string> = this.search.valueChanges.pipe(
    map(form => form.title),
    debounceTime(100),
  );


  readonly list$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.startWith$
  ]).pipe(
    map(([products, startsWith]) => {
      if (!startsWith) {
        return [];
      }
      return products.filter(product => product.title.startsWith(startsWith))
    })
  );


  constructor(private _productService: ProductService) {
  }


}
