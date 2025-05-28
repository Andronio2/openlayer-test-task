import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [CommonModule, ButtonModule],
})
export class SidebarComponent {
  // @HostBinding('class') protected readonly class = 'contents'; // Makes component host as if it was not there, can offer less css headaches. Assumes .contents{display:contents} css class exits
  // constructor() {}
}
