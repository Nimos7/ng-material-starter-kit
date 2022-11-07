import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JokesModel} from '../models/jokes.model';

@Injectable()
export class JokesService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(type: string): Observable<JokesModel> {
    return this._httpClient.get<JokesModel>(`https://official-joke-api.appspot.com/random_joke`);
  }
}
