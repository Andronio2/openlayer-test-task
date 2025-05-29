import { Employee } from '../models/employee';
import { Message } from '../models/message';
import { Technique } from '../models/technique';
import { EmployeeDto } from '../shared/dto/employee.dto';
import { MessageDto } from '../shared/dto/message.dto';
import { TechniqueDto } from '../shared/dto/technique.dto';

export class AppMapper {
  static mapEmployeeDtoToEmployee(employeeDto: EmployeeDto): Employee {
    return {
      id: employeeDto.id,
      lon: employeeDto.lon,
      lat: employeeDto.lat,
      name: employeeDto.name,
    };
  }

  static mapTechniqueDtoToTechnique(techniqueDto: TechniqueDto): Technique {
    return {
      id: techniqueDto.id,
      lon: techniqueDto.lon,
      lat: techniqueDto.lat,
      name: techniqueDto.name,
    };
  }

  static mapMessageDtoToMessage(messageDto: MessageDto): Message {
    return {
      employee: messageDto.employee.map(AppMapper.mapEmployeeDtoToEmployee),
      technique: messageDto.technique.map(AppMapper.mapTechniqueDtoToTechnique),
      time: new Date(messageDto.time),
    };
  }
}
