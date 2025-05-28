import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { MapComponent } from "../map/map.component";
import { ToolsComponent } from "../tools/tools.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [CommonModule, SidebarComponent, MapComponent, ToolsComponent],
})
export class LayoutComponent {
  // @HostBinding('class') protected readonly class = 'contents'; // Makes component host as if it was not there, can offer less css headaches. Assumes .contents{display:contents} css class exits
  // constructor() {}
}
