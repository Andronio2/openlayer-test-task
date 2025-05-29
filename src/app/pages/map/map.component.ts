import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularOpenlayersModule } from 'ng-openlayers';
import { MapBrowserEvent } from 'ol';
import { combineLatestWith, map, Observable } from 'rxjs';
import { Message } from '../../models/message';
import { AppService } from '../../services/app.service';

interface MessageWithSelectedId {
  message: Message;
  id: number;
}
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  imports: [CommonModule, AngularOpenlayersModule],
})
export class MapComponent {
  messages$: Observable<MessageWithSelectedId>;

  constructor(private appService: AppService) {
    const messages$ = this.appService.messages$;
    const selectedFeatureId$ = this.appService.selectedFeatureId$;
    this.messages$ = messages$.pipe(
      combineLatestWith(selectedFeatureId$),
      map(([message, id]) => ({ message, id }))
    );
  }

  onMapClick(event: MapBrowserEvent<MouseEvent>) {
    const f = event.map.forEachFeatureAtPixel(event.pixel, (f) => f);
    if (!f) return;
    this.appService.setSelectedFeatureId(Number(f.getId()!));
  }
}
