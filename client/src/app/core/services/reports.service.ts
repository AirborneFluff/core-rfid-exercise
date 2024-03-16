import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassRegistrationReport } from '../models/class-registration-report';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  baseUrl = "http://localhost:5156/"

  constructor(private http: HttpClient) { }

  public getClassRegistrationReports(minimumRegistrations: number = 0): Observable<ClassRegistrationReport[]> {
    const params = new HttpParams().append("minimumRegistrations", minimumRegistrations);
    return this.http.get<ClassRegistrationReport[]>(this.baseUrl + 'reports', {params: params});
  }
}
