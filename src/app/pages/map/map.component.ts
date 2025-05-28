import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AngularOpenlayersModule, SourceVectorComponent } from 'ng-openlayers';
import { Feature, MapBrowserEvent } from 'ol';
import { Vector } from 'ol/layer';
import { Style } from 'ol/style';
import { Observable } from 'rxjs';
import { Message } from '../../models/message';
import { AppService } from '../../services/app.service';
import { Geometry } from 'ol/geom';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  imports: [CommonModule, AngularOpenlayersModule],
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('layer', { static: true }) layer?: SourceVectorComponent;

  messages$: Observable<Message>;
  featureList!: Feature<Geometry>[];

  constructor(private appService: AppService) {
    this.messages$ = this.appService.messages$;
  }

  ngOnInit(): void {
    this.messages$.subscribe(this.showFeatures);
    console.log('layer', this.layer);
  }

  ngAfterViewInit(): void {
    this.featureList = this.layer?.instance.getFeatures() || [];
  }

  private showFeatures(msg: Message) {
    // const
    // msg.employee.forEach((e) => {
    // })
  }

  onMapClick(event: MapBrowserEvent<MouseEvent>) {
    console.log('event', event);
    const f = event.map.forEachFeatureAtPixel(event.pixel, (f) => f);
    if (!f) return;
    const fn = f.getStyleFunction()!;
    const style = fn(f, 1) as Style[];
    console.log('style', style);
    const st = style[0];
    st.getImage()!.setScale(2);
    // event.map.changed();
    const layerList = event.map.getLayers();
    console.log('layerList', layerList);
    layerList.forEach((l) => {
      if (l instanceof Vector) l.changed();
    });
    // event.map.render();
    // this.cdr.detectChanges();
  }
}
