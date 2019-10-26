import { Component, OnInit } from '@angular/core';
import {Company, Employee} from "../../../../shared/model/model";
import {DataService} from "../data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companies$:Observable<Company[]>;

  constructor(private data:DataService) {
    this.companies$= this.data.getAll();
  }

  ngOnInit() {

  }

}
