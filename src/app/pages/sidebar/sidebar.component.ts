import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit } from '@angular/core';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ButtonModule } from 'primeng/button';
import { OverlayModule } from 'primeng/overlay';
import { TableModule } from 'primeng/table';
import { Employee } from '../../models/employee';
import { Technique } from '../../models/technique';
import { AppService } from '../../services/app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [CommonModule, ButtonModule, TableModule, OverlayModule],
})
export class SidebarComponent implements OnInit {
  isShowEmployee: boolean = false;
  isShowTechnique: boolean = false;
  employeeList: Employee[] = [];
  techniqueList: Technique[] = [];
  time: Date = new Date();
  selectedItem$: Observable<number>;

  constructor(private appService: AppService, private destroy: DestroyRef) {
    this.selectedItem$ = this.appService.selectedFeatureId$;
  }

  ngOnInit(): void {
    this.appService.messages$
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe((messages) => {
        this.employeeList = messages.employee;
        this.techniqueList = messages.technique;
        this.time = messages.time;
      });
  }

  toggleEmployee() {
    this.isShowEmployee = !this.isShowEmployee;
  }

  toggleTechnique() {
    this.isShowTechnique = !this.isShowTechnique;
  }

  selectItem(id: number) {
    this.appService.setSelectedFeatureId(id);
  }
}
