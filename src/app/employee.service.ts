import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

const headerOption = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //private _url:string = "./assets/data/employees.json";
  private _url:string = "https://jsonplaceholder.typicode.com/todos/";
  constructor(private http : HttpClient) { }

  getEmployees() : Observable<IEmployee[]>{
     return this.http.get<IEmployee[]>(this._url);
  }

  createEmaployee(emp:IEmployee):Observable<IEmployee>{
    return this.http.post<IEmployee>(this._url, emp,headerOption);
  }

}
