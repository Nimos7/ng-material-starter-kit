import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CartsModel} from '../models/carts.model';

@Injectable()
export class CartService {
  constructor(private _httpClient: HttpClient) {

  }

  getOne(id: number): Observable<CartsModel> {
    return this._httpClient.get<CartsModel>(`https://fakestoreapi.com/carts/${id}`);
  }

}
