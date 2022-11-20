import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable, pipe, take} from 'rxjs';
import {EmployeeModel} from '../../models/employee.model';
import {EmployeeService} from '../../services/employee.service';
import {ProductModel} from "../../models/product.model";
import {map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-refresh-employees-list',
  templateUrl: './refresh-employees-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefreshEmployeesListComponent {
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0)

  readonly refreshedList$: Observable<EmployeeModel[]> = this._refreshSubject.asObservable().pipe(
    switchMap(data => this._employeeService.getAll())
  )

  constructor(private _employeeService: EmployeeService) {
  }

  delete(id: number): void {
    this._employeeService.delete(id).subscribe(() => this._refreshSubject.next());
  }
}
