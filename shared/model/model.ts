export interface Company{
    id:number,
    name:string,
    employees:{[id:number]:Employee }
}

export interface Employee
{
    id:number,
    firstName:string,
    lastName:string,
    salaries:{[companyId:number]:number }
}
