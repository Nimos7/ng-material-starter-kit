import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { RegisterFormModel } from '../models/register-form.model';

@Injectable()
export class RegisterFormService {
  constructor(private _httpClient: HttpClient) {
  }

  create(user:RegisterFormModel): Observable<void> {
    return this._httpClient.post('https://fakestoreapi.com/users', user ).pipe(map(_=>void 0));

  }
}
