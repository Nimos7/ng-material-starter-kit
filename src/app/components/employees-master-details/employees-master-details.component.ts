import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {EmployeeModel} from '../../models/employee.model';
import {EmployeeService} from '../../services/employee.service';
import {ProductModel} from "../../models/product.model";
import {switchMap, take} from "rxjs/operators";

@Component({
  selector: 'app-employees-master-details',
  templateUrl: './employees-master-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesMasterDetailsComponent {
  readonly list$: Observable<EmployeeModel[]> = this._employeeService.getAll();
  private _selectedEmployeeIdSubject: Subject<string> = new Subject<string>();
  public selectedEmployeeId$: Observable<string> =
    this._selectedEmployeeIdSubject.asObservable();
  readonly details$: Observable<EmployeeModel> = this.selectedEmployeeId$.pipe(
    take(1),
    switchMap((data) => this._employeeService.getOne(data))
  );

  constructor(private _employeeService: EmployeeService) {
  }


  selectEmployee(id: number): void {
    this._selectedEmployeeIdSubject.next(String(id));
  }
}
