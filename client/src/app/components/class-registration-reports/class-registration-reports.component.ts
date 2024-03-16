import { Component } from '@angular/core';
import { ReportsService } from '../../core/services/reports.service';
import { shareReplay } from 'rxjs';

@Component({
  selector: 'app-class-registration-reports',
  templateUrl: './class-registration-reports.component.html',
  styleUrls: ['./class-registration-reports.component.scss']
})
export class ClassRegistrationReportsComponent {

  constructor(private reportsService: ReportsService) {
  }

  reports$ = this.reportsService.getClassRegistrationReports().pipe(
    shareReplay(1)
  )

}
