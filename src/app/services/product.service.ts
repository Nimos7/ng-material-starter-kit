import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ProductModel} from '../models/product.model';

@Injectable()
export class ProductService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products');
  }


  create(id: Partial<ProductModel>): Observable<void> {
    return this._httpClient.post<ProductModel>('https://fakestoreapi.com/products', id).pipe(map(_ => void 0))
  }

  getOne(id: string): Observable<ProductModel> {
    return this._httpClient.get<ProductModel>(`https://fakestoreapi.com/products/${id}`);
  }

  delete(id: string): Observable<ProductModel> {
    return this._httpClient.delete<ProductModel>('https://fakestoreapi.com/products/' + id)
  }
}
