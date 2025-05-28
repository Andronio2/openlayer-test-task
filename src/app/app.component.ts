import { ChangeDetectorRef, Component } from '@angular/core';
import { AngularOpenlayersModule } from 'ng-openlayers';
import { LayoutComponent } from "./pages/layout/layout.component";

@Component({
  selector: 'app-root',
  imports: [AngularOpenlayersModule, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
