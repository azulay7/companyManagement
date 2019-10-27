import { Controller, Get } from '@nestjs/common';
import { Company } from '../../../shared/model/model';
import { AppService } from '../app.service';

@Controller('company')
export class CompanyController {

  constructor(private readonly appService: AppService) {
  }

  @Get()
  getAll() {
    return this.appService.getAllCompanies();
  }
}
