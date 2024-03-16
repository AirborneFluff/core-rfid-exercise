import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassRegistrationReport } from '../models/class-registration-report';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  baseUrl = "http://localhost:5156/"

  constructor(private http: HttpClient) { }

  public getClassRegistrationReports(): Observable<ClassRegistrationReport[]> {
    return this.http.get<ClassRegistrationReport[]>(this.baseUrl + 'reports');
  }
}
