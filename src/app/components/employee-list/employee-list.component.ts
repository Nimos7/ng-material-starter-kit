import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  of,
  ReplaySubject,
  switchMap,
} from 'rxjs';
import {EmployeeModel} from '../../models/employee.model';
import {EmployeeService} from '../../services/employee.service';
import {map} from 'rxjs/operators';

interface Age {
  minAge: number;
  maxAge: number;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    'asc'
  );
  private _ageSubject: ReplaySubject<Age> = new ReplaySubject<Age>(0, 100);

  employee$: Observable<EmployeeModel[]> = combineLatest([
    this._orderSubject.asObservable(),
    this._ageSubject.asObservable(),
  ]).pipe(
    switchMap(([order, age]) =>
      this._employeeService.getAll().pipe(
        map((data) =>
          data.filter(
            (d) => d.employee_Age > age.minAge && d.employee_Age < age.maxAge
          )
        ),
        map((employee) => {
          return employee.sort((a, b) => {
            if (a.employee_Salary > b.employee_Salary)
              return order === 'asc' ? 1 : -1;
            if (a.employee_Salary < b.employee_Salary)
              return order === 'asc' ? -1 : 1;
            return 0;
          });
        })
      )
    )
  );

  public orders: Observable<string[]> = of(['asc', 'desc']);

  public age: Observable<Age[]> = of([
    {minAge: 0, maxAge: 20},
    {minAge: 21, maxAge: 30},
    {minAge: 31, maxAge: 40},
    {minAge: 41, maxAge: 50},
    {minAge: 51, maxAge: 100},
  ]);

  constructor(private _employeeService: EmployeeService) {
  }

  sort(order: string): void {
    this._orderSubject.next(order);
  }

  sortAge(minAge: number, maxAge: number): void {
    this._ageSubject.next({maxAge: maxAge, minAge: minAge});
  }
}
