import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductTestModel} from '../models/product-test.model';

@Injectable()
export class DetailsTestService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductTestModel[]> {
    return this._httpClient.get<ProductTestModel[]>('https://fakestoreapi.com/products');
  }

  getOne(id: number): Observable<ProductTestModel> {
    return this._httpClient.get<ProductTestModel>(`https://fakestoreapi.com/products/${id}`);
  }


  delete(id: number): Observable<ProductTestModel> {
    return this._httpClient.get<ProductTestModel>(`https://fakestoreapi.com/products/${id}`);
  }
}
