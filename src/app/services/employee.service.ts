import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, take} from 'rxjs';
import {EmployeeModel} from '../models/employee.model';
import {map} from "rxjs/operators";
import {ApiResponse} from "./api.response";
import {EmployeeResponse} from "./employee.response";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>
    ('https://dummy.restapiexample.com/api/v1/employees').pipe(
      take(1),
      map((response: ApiResponse<EmployeeResponse[]>): EmployeeModel[] => {
        return response.data.map((employeeResponse: EmployeeResponse) => {
          return {
            employee_Name: employeeResponse.employee_name,
            employee_Salary: employeeResponse.employee_salary,
            employee_Age: employeeResponse.employee_age,
            profile_Image: employeeResponse.profile_image,
            id: employeeResponse.id,

          }
        });
      }));

  }


  create(id: EmployeeModel): Observable<void> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', id).pipe(map(_ => void 0))
  }
}
