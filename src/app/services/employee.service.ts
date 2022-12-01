import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {EmployeeModel} from '../models/employee.model';
import {ApiResponse} from './api.response';
import {EmployeeResponse} from './employee.response';
import {EmployeeModelOg} from "../components/employees-master-details/employees-master-details.component";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>
    ('https://dummy.restapiexample.com/api/v1/employees').pipe(
      take(1),
      map((response) => {
        return response.data.map((employeeResponse) => {
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

  delete(id: number): Observable<EmployeeModel> {
    return this._httpClient.delete<EmployeeModel>('https://dummy.restapiexample.com/api/v1/delete/' + id)
  }

  getOne(id: number): Observable<EmployeeModelOg> {
    return this._httpClient.get<EmployeeModelOg>(`https://dummy.restapiexample.com/api/v1/employee/${id}`);
  }
}
