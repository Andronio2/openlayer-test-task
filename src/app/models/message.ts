import { Employee } from './employee';
import { Technique } from './technique';

export interface Message {
  employee: Employee[];
  technique: Technique[];
  time: Date;
}
