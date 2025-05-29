import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Message } from '../models/message';
import { WebSocketService } from '../shared/services/web-socket/web-socket.service';
import { AppMapper } from './app.mapper';

@Injectable()
export class AppService implements OnDestroy {
  messages$: Observable<Message>;
  private _selectedFeatureId$ = new BehaviorSubject<number>(0);
  selectedFeatureId$ = this._selectedFeatureId$.asObservable();

  constructor(private webSocketService: WebSocketService) {
    this.messages$ = this.webSocketService
      .getMessages()
      .pipe(map(AppMapper.mapMessageDtoToMessage));
  }

  setSelectedFeatureId(id: number) {
    this._selectedFeatureId$.next(id);
  }

  ngOnDestroy(): void {
    this.webSocketService.closeConnection();
  }
}
