export default function ClassRegistrationReport() {
  return (
    <>
    <label className="block text-gray-900 font-light mb-1 font-display" htmlFor="minimumRegistrations">
      Minimum Registrations
    </label>
    <div className="flex justify-between items-center gap-2">
      <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="minimumRegistrations" type="number" placeholder="5"/>
      <div className="flex gap-2">
        <button className="bg-blue-400 hover:bg-blue-500 py-2 px-4 rounded-md text-white font-display">
        Update
      </button>
      <button className="border-gray-500 border text-gray-700 py-2 px-4 rounded-md font-display hover:bg-gray-500 hover:text-white">
      Clear
    </button>
    </div>
</div>
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
      <tr>
        <td>class</td>
        <td>teacherName</td>
        <td>registrations</td>
        <td>numberPaid</td>
      </tr>
  </tbody>
</table>
    </>
  )
}