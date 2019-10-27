import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {DataService} from "./data.service";
import {Company, Employee} from "../../../shared/model/model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  companies$: Observable<Company[]>;

  constructor(private data: DataService) {
    this.companies$ = this.data.getAll();
  }
}
