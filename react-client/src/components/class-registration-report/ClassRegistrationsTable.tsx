import { ClassRegistrationReport } from '../../models/class-registration-report';

interface ClassRegistrationsTableProps {
  data: ClassRegistrationReport[];
}

export default function ClassRegistrationsTable({data}: ClassRegistrationsTableProps) {
  return (
    <table className="table-auto w-full mt-4">
      <thead className="bg-gray-200 rounded md:text-lg text-sm">
        <tr className="text-gray-700 text-left">
          <th className="rounded-tl-xl">Class</th>
          <th>Teacher</th>
          <th>Registrations</th>
          <th className="rounded-tr-xl">Number Paid</th>
        </tr>
      </thead>
      <tbody>
        {data.map((report, i) =>
          <tr key={i}>
            <td>{report.class}</td>
            <td>{report.teacherName}</td>
            <td>{report.registrations}</td>
            <td>{report.numberPaid}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}