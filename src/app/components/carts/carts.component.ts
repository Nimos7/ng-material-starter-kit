import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {CartsModel} from '../../models/carts.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartsComponent {
  readonly carts$: Observable<CartsModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._cartService.getOne(data['id'])));

  constructor(private _cartService: CartService, private _activatedRoute: ActivatedRoute) {
  }


}
