import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {EmployeeModel} from '../../models/employee.model';
import {EmployeeService} from '../../services/employee.service';
import {ProductModel} from "../../models/product.model";
import {switchMap, take} from "rxjs/operators";


export interface EmployeeModelOg {
  readonly data: {

    readonly id: number;
    readonly employee_name: string;
    readonly employee_salary: number;
    readonly employee_age: number;
    readonly profile_image: string;
  }
}

@Component({
  selector: 'app-employees-master-details',
  templateUrl: './employees-master-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesMasterDetailsComponent {
  readonly list$: Observable<EmployeeModel[]> = this._employeeService.getAll();
  private _selectedEmployeeIdSubject: Subject<number> = new Subject<number>();

  readonly details$: Observable<EmployeeModelOg> = this._selectedEmployeeIdSubject.asObservable().pipe(
    switchMap((data) => this._employeeService.getOne(data
    ))
  );

  constructor(private _employeeService: EmployeeService) {
  }


  selectEmployee(id: number): void {
    this._selectedEmployeeIdSubject.next(id)
  }
}
