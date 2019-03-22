import { Injectable } from '@angular/core';
import {EMPLOYEES} from '../shared/employees';
import {Employee} from '../shared/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Employee[] {
    return EMPLOYEES;
  }

  getEmployee(id: number): Employee {
    return EMPLOYEES.filter((employee) => ( employee.id === id))[0];
  }

  getFeaturedEmployee(): Employee {
    return EMPLOYEES.filter((employee) => (employee.featured))[0];
  }
}
