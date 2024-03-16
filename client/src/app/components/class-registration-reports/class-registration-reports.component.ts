import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReportsService } from '../../core/services/reports.service';
import { BehaviorSubject, distinctUntilChanged, shareReplay, switchMap } from 'rxjs';

@Component({
  selector: 'app-class-registration-reports',
  templateUrl: './class-registration-reports.component.html',
  styleUrls: ['./class-registration-reports.component.scss']
})
export class ClassRegistrationReportsComponent {
  @ViewChild("minimumInput") inputElement!: ElementRef;

  constructor(private reportsService: ReportsService) {
  }

  minimumRegistrations$ = new BehaviorSubject(0);

  reports$ = this.minimumRegistrations$.pipe(
    distinctUntilChanged(),
    switchMap(minimum => this.reportsService.getClassRegistrationReports(minimum)),
    shareReplay(1)
  )

  updateFilter(value: any) {
    let minimumRegistrations = Number.parseInt(value);
    if (isNaN(minimumRegistrations)) minimumRegistrations = 0;
    minimumRegistrations = Math.max(0, minimumRegistrations);

    this.minimumRegistrations$.next(minimumRegistrations);
  }

  clearFilter() {
    this.inputElement.nativeElement.value = '';
    this.updateFilter(0);
  }
}
