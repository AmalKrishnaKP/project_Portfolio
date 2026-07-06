import type { Employee } from "@/types/employee";
import type { Company } from "@/types/company";


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