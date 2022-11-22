import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoriesTestModel} from '../models/categories-test.model';

@Injectable()
export class CategoriesTestService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<CategoriesTestModel[]> {
    return this._httpClient.get<CategoriesTestModel[]>('https://fakestoreapi.com/products/categories');
  }
}
