import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularOpenlayersModule } from 'ng-openlayers';
import { MapBrowserEvent } from 'ol';
import { Vector } from 'ol/layer';
import { Style } from 'ol/style';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  // styles: [':host{display:contents}'], // Makes component host as if it was not there, can offer less css headaches. Use @HostBinding class approach for easier overrides.
  // host: { class: 'contents' },
  imports: [CommonModule, AngularOpenlayersModule],
})
export class MapComponent {
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
