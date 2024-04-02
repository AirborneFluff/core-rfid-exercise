import { ClassRegistrationReport } from '../models/class-registration-report';

export class ReportsService {
  baseUrl = "http://localhost:5156/"


  public async getClassRegistrationReports(minimumRegistrations: number = 0): Promise<ClassRegistrationReport[]> {
    const params = new URLSearchParams();
    params.append("minimumRegistrations", minimumRegistrations.toString());

    const res = await fetch(this.baseUrl + 'reports?' + params.toString());
    return await res.json();
  }
}