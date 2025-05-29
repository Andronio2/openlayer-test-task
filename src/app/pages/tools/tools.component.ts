import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PopoverModule } from 'primeng/popover';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
  imports: [CommonModule, PopoverModule],
})
export class ToolsComponent {}
