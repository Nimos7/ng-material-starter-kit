import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { CategoriesService } from '../../services/categories.service';
import { CategoriesTestService } from '../../services/categories-test.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-categories',
  styleUrls: ['./categories.component.scss'],
  templateUrl: './categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent {
  readonly list$: Observable<string[]> = this._categoriesTestService.getAll().pipe(
    delay(2000),
     map(() => [])
  );;

  constructor( private _categoriesTestService: CategoriesTestService) {
  }
}
