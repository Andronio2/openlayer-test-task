import { Injectable, OnDestroy } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Message } from '../models/message';
import { WebSocketService } from '../shared/services/web-socket/web-socket.service';
import { AppMapper } from './app.mapper';

@Injectable()
export class AppService implements OnDestroy {
  messages$: Observable<Message>;

  constructor(private webSocketService: WebSocketService) {
    this.messages$ = this.webSocketService
      .getMessages()
      .pipe(map(AppMapper.mapMessageDtoToMessage));
  }

  ngOnDestroy(): void {
    this.webSocketService.closeConnection();
  }
}
