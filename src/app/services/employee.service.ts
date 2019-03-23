import { Injectable } from '@angular/core';
import {EMPLOYEES} from '../shared/employees';
import {Employee} from '../shared/Employee';
import {ITEMS} from '../shared/items';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Promise<Employee[]> {
    return Promise.resolve(EMPLOYEES);
  }

  getEmployee(id: number): Promise<Employee> {
    return Promise.resolve(EMPLOYEES.filter((employee) => ( employee.id === id))[0]);
  }

  getFeaturedEmployee(): Promise<Employee> {
    return Promise.resolve(EMPLOYEES.filter((employee) => (employee.featured))[0]);
  }
}
