import { Injectable } from '@angular/core';
import {EMPLOYEES} from '../shared/employees';
import {Employee} from '../shared/Employee';
import {ITEMS} from '../shared/items';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/operator/delay';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Observable<Employee[]> {
    // return Promise.resolve(EMPLOYEES);
    return Observable.of(EMPLOYEES).delay(2000);
  }

  getEmployee(id: number): Observable<Employee> {
    // return Promise.resolve(EMPLOYEES.filter((employee) => ( employee.id === id))[0]);
    return Observable.of(EMPLOYEES.filter((employee) => ( employee.id === id))[0]).delay(2000);
  }

  getFeaturedEmployee(): Observable<Employee> {
    // return Promise.resolve(EMPLOYEES.filter((employee) => (employee.featured))[0]);
    return Observable.of(EMPLOYEES.filter((employee) => (employee.featured))[0]).delay(2000);
  }
}
