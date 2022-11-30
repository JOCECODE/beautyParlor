import React, { useState } from 'react';

import { trpc } from "../utils/trpc";
import ApptQueryDisplay from './ApptQueryDisplay';
import CustomerQueryDisplay from './CustomerQueryDisplay';

const AdminView: React.FC = () => {

  const [lastClicked, setLastClicked] =useState<string>("appointments");

  const {data: apptData, refetch: refetchAppt, isFetching: isFetchingAppts } = trpc.appointment.getAllAppts.useQuery({}, {
    refetchOnWindowFocus: false,
    // this stops the query from automatically running
    enabled: false
  });

  const { data: userData, refetch: refetchUser, isFetching: isFetchingUsers}  = trpc.user.getAllUsers.useQuery({}, {
    enabled: false,
    refetchOnWindowFocus: false
  })

  const handleClick = (query: string) => {
    console.log("i clicked")
    if(query === 'appointments'){
      refetchAppt();
    } else {
      refetchUser();
    }
    setLastClicked(query);
    // calling refetch tells React to NOW fire the query
  }
  if(apptData){
    console.log(apptData);
  }
  if(userData){
    console.log(userData)
  }
  return (
    // vertical stack container
    <div
    className="container h-full flex flex-col justify-start items-center gap-3 border rounded-lg p-2"
    >
      {/* title */}
      <h2
        className='text-lg'
      >
        what you need admin?
      </h2>

      {/* admin buttons for queries */}
      <div
        className='w-full flex flex-row justify-center items-center gap-4 p-2'
      >
        <button
          className='rounded-md border border-black bg-violet-50 px-4 py-2 text-xl shadow-sm hover:bg-violet-100'
          // disable button while the query is fetching, prevents double calls
          disabled={isFetchingAppts}
          onClick={() => handleClick("appointments")}
        >
          appointments
        </button>
        <button
          className='rounded-md border border-black bg-violet-50 px-4 py-2 text-xl shadow-sm hover:bg-violet-100'
          disabled={isFetchingUsers}
          onClick={() => handleClick("customers")}
        >
          customers
        </button>
      </div>

      {/* display results */}
      {/* <div
        className='w-4/5 font-mono'
      >
        { apptData?.map( appt => (
          <p
            key={appt.id}
          >
            {appt.id} --- {appt.service} @ {appt.apptTime}
          </p>
        )
        )}
      </div> */}

      {
        lastClicked === 'appointments' ? 
          <ApptQueryDisplay queryData={apptData} /> 
          : <CustomerQueryDisplay queryData={userData} />
      }
      


  </div>
  )
}

export default AdminView