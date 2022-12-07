import React from 'react';

import { trpc } from "../utils/trpc";
import NavbarAdmin from './NavbarAdmin';
import TableCustomers from './TableCustomers';

const AdminView: React.FC = () => {

  const {data: apptData } = trpc.appointment.getAllAppts.useQuery({},  {
    refetchOnWindowFocus: false,
    // this stops the query from automatically running
    enabled: true,
  }
  );

  return (
    <>
    <br/>
      {/* title */}
      <div
        className='w-full text-2xl text-left'
      >
         What's up Alyssa,
      </div>
      <br/>
       <TableCustomers queryData={apptData}/>
       <br/>
       <br/>
           <NavbarAdmin/>
      
     
      
  </>
  
  )
}

export default AdminView;