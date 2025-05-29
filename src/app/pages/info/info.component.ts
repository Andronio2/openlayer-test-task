import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  imports: [CommonModule],
})
export class InfoComponent {
  time$: Observable<Date>;

  constructor(private appService: AppService) {
    this.time$ = this.appService.messages$.pipe(
      map((messages) => messages.time)
    );
  }
}
