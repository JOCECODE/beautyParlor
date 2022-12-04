import React from 'react';

import { trpc } from "../utils/trpc";


const CreateAppointmentButton = () => {
// creating an instance of the useMutation() method
  const mutation = trpc.appointment.createAppt.useMutation();
  const handleCreateAppt = async () => {
    // reference the const mutation.mutate() make service a string "haircut" else it will error
    // apptTime a string as well or it will error it was declared 
    mutation.mutate({service: "haircut", apptTime: "4:30 PM"})
  }
  return (
      <>
        <button className="rounded-md border border-black bg-violet-50 px-4 py-2 text-xl shadow-sm hover:bg-violet-100"
          disabled={mutation.isLoading} onClick={handleCreateAppt}
        >
          create appointment
        </button>
        <div>
        {mutation.isLoading ? (
          <p>creating appointment...</p>
        ) : (
          <>
            {
              mutation.isError ? (
                <div> an error ocurred: {mutation.error.message}</div>
              ) : null 
            }

            {mutation.isSuccess ? <div> appointment created!</div> : null}
          </>
        )}
        </div>
      </>
  )
};

export default CreateAppointmentButton;