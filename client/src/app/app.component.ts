import { Component } from '@angular/core';
import { ReportsService } from './core/services/reports.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private reports: ReportsService) {
    this.reports.getClassRegistrationReports().subscribe(val => console.log(val))
  }
}
