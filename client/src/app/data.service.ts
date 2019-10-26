import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company} from "../../../shared/model/model";
import {Observable, of} from "rxjs";


const SERVER_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  companies:Company[] = [{id:1,name:'mock', employees:{}},{id:2,name:'mock2', employees:{}}]; //mock

  constructor(private  http: HttpClient) {
    // this.http.get(SERVER_URL+'/company/all')

  }

  getAll():Observable<Company[]>
  {
    return of(this.companies);
  }
}
