import type { Employee } from "./employee";
import type { Company } from "./company";


export interface HeroProps {
  employee: Employee;
  company: Company;
}
export interface EmployeeProps {
  employee: Employee;
}

export interface CompanyProps {
  company: Company;
}