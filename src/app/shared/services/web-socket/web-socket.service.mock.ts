import { Provider } from '@angular/core';
// import { Observable, of } from 'rxjs';

import { delay, interval, map, of } from 'rxjs';
import { MessageDto } from '../../dto/message.dto';
import { WebSocketService } from './web-socket.service';
// import { ExampleReturnType } from './example-return-type.model';
// import { MOCK_ExampleReturnType } from './example-return-type.model.mock';
// export const MOCK_ExampleReturnType: ExampleReturnType = {};

const x = 69.14083;
const y = 54.86222;

function rnd(): number {
  return Math.random() / 1000 - 0.0005;
}

function generateMessage(): MessageDto {
  return {
    employee: [
      { id: 1, lon: x + rnd(), lat: y + rnd(), name: 'Employee 1' },
      { id: 2, lon: x + rnd(), lat: y + rnd(), name: 'Employee 2' },
    ],
    technique: [
      { id: 3, lon: x + rnd(), lat: y + rnd(), name: 'Technique 1' },
      { id: 4, lon: x + rnd(), lat: y + rnd(), name: 'Technique 2' },
    ],
    time: new Date().toISOString(),
  };
}

export const MOCK_WebSocketService = {
  getMessages: () => interval(5000).pipe(map(() => generateMessage())),
  closeConnection: () => null,
};

export const MOCK_WebSocketServiceProvider: Provider = {
  provide: WebSocketService,
  useValue: MOCK_WebSocketService,
};
