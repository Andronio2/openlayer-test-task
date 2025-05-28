import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';
import { MessageDto } from '../../dto/message.dto';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket$: WebSocketSubject<MessageDto>;

  constructor() {
    this.socket$ = webSocket('ws://your-websocket-url');
  }

  // Receive messages from the server
  getMessages(): Observable<MessageDto> {
    return this.socket$.asObservable();
  }

  // Close the WebSocket connection
  closeConnection() {
    this.socket$.complete();
  }
}
