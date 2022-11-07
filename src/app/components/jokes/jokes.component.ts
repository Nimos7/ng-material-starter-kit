import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {JokesModel} from '../../models/jokes.model';
import {JokesService} from '../../services/jokes.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokesComponent {
  readonly data$: Observable<JokesModel> = this._jokesService.getOne('type');

  constructor(private _jokesService: JokesService) {
  }
}
