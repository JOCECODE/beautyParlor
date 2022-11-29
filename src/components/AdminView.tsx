import React from 'react';

import { trpc } from "../utils/trpc";


const AdminView: React.FC = () => {

  const {data, refetch, isFetching } = trpc.appointment.getAllAppts.useQuery({}, {
    refetchOnWindowFocus: false,
    // this stops the query from automatically running
    enabled: false
  });

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log("i clicked")
    // calling refetch tells React to NOW fire the query
    refetch();
  }
  if(data){
    console.log(data);
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
          disabled={isFetching}
          onClick={handleClick}
        >
          appointments
        </button>
        <button
          className='rounded-md border border-black bg-violet-50 px-4 py-2 text-xl shadow-sm hover:bg-violet-100'
        >
          customers
        </button>
      </div>

      {/* display results */}
      <div
        className='w-4/5 font-mono'
      >
        { data?.map( appt => (
          <p
            key={appt.id}
          >
            {appt.id} --- {appt.service} @ {appt.apptTime}
          </p>
        )
        )}
      </div>


  </div>
  )
}

export default AdminView