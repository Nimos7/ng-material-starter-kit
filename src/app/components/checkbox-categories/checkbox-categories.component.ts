import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {delay, Observable} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {CategoriesService} from '../../services/categories.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-checkbox-categories',
  styleUrls: ['./checkbox-categories.component.scss'],
  templateUrl: './checkbox-categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxCategoriesComponent {
  readonly categories$: Observable<ProductModel[]> = this._categoriesService.getAll().pipe(
    delay(2000),
    // map(() => [])
  );

  constructor(private _categoriesService: CategoriesService) {
  }
}
