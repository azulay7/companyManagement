import { Injectable } from '@nestjs/common';
import {Company} from "../../shared/model/model";


const companies:Company[] = [{id:1,name:'mock', employees:{}},{id:2,name:'mock2', employees:{}}];

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World222!';
  }

  getAllCompanies(): Company[] {
      return companies;
  }
}
