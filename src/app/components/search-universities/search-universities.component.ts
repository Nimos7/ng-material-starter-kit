import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {UniversityService} from '../../services/university.service';
import {debounceTime, Observable, switchMap} from "rxjs";
import {UniversityModel} from "../../models/university.model";

@Component({
  selector: 'app-search-universities',
  templateUrl: './search-universities.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchUniversitiesComponent {
  readonly search: FormControl = new FormControl('')
  readonly universities$: Observable<UniversityModel[]> = this.search.valueChanges.pipe(
    debounceTime(1000),
    switchMap((search) => this._universityService.getAll(search)
    )
  );

  constructor(private _universityService: UniversityService) {
  }
}
