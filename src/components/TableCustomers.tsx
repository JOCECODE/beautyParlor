import { type Appointment } from '@prisma/client';

type TableCustomersProps = {
    queryData: Appointment[] | undefined
}

const TableCustomers: React.FC<TableCustomersProps> =  ({ queryData }) => {
  return (
    <>

     <table className="table w-full">
    {/* Header */}
    <thead>
      <tr>
        <th>
        
        </th>
        <th className="font-bold">Name</th>
        <th>Upcoming Appointments</th>
      </tr>
    </thead>
    <tbody>
      { queryData?.map( appt => (
        <tr key={appt.id}>
        <th>
          <label>
             <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/brownPuppy.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
             
            {/* Name and Phone Number of Client */}
            <div>
              <div className="font-bold text-sm">H. Williams</div>
              <div className="text-sm opacity-50">(562) 250-8932</div>
            </div>
          </div>

        </td>

        <td>
          {appt.service} Today!
          <br/>
          <span className="badge badge-ghost badge-sm">{appt.apptTime}</span>
          <span className="badge bg-green-500 badge-sm">Confirmed</span>
        </td>
        
      </tr>
      ))}
      
    </tbody>
  </table>


</>
  )
}

export default TableCustomers;