import { EmployeeDto } from './employee.dto';
import { TechniqueDto } from './technique.dto';

export interface MessageDto {
  employee: EmployeeDto[];
  technique: TechniqueDto[];
  time: string;
}
