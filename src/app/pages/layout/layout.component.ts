import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';
import { MapComponent } from '../map/map.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ToolsComponent } from '../tools/tools.component';
import { InfoComponent } from "../info/info.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [CommonModule, SidebarComponent, MapComponent, ToolsComponent, InfoComponent],
  providers: [AppService],
})
export class LayoutComponent {}
