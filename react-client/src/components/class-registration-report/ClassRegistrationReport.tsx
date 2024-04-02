import { useEffect, useState } from 'react';
import NumberInputField from './NumberInputField';
import AppButton from './AppButton';
import ClassRegistrationsTable from './ClassRegistrationsTable';
import { ReportsService } from '../../services/reports-service';
import { ClassRegistrationReport } from '../../models/class-registration-report';

export default function ClassRegistrationReports() {
  const reportsService = new ReportsService();

  const [minRegistrations, setMinRegistrations] = useState(0);
  const [reportData, setReportData] = useState<ClassRegistrationReport[]>([]);

  async function onFilterSubmit(event: any) {
    event.preventDefault();
    await getReport(minRegistrations);
  }

  async function getReport(minimumRegistrations: number = 0) {
    const data = await reportsService.getClassRegistrationReports(minimumRegistrations);
    setReportData(data);
  }

  useEffect(() => {
    getReport();
  }, []);

  async function onFilterClear(event: any) {
    event.preventDefault();
    setMinRegistrations(0);
    await getReport();
  }

  return (
    <>
      <label className="block text-gray-900 font-light mb-1 font-display" htmlFor="minimumRegistrations">
        Minimum Registrations
      </label>
      <form
        id="filterForm"
        className="flex justify-between items-center gap-2">
        <NumberInputField value={minRegistrations} onValueChange={setMinRegistrations} min={0} />
        <div className="flex gap-2">
          <AppButton onClick={onFilterSubmit} color={'primary'}>
            Update
          </AppButton>
          <AppButton onClick={onFilterClear} color={'secondary'}>
            Clear
          </AppButton>
        </div>
      </form>
      <ClassRegistrationsTable data={reportData} />
    </>
  )
}