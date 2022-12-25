import React from 'react';

import { trpc } from "../utils/trpc";


const CreateAppointmentButton = () => {

  const mutation = trpc.appointment.createAppt.useMutation();
  const handleCreateAppt = async () => {
    mutation.mutate({
      service: "haircut", 
      apptTime: "4:30 PM", 
      firstName: "Jack", 
      lastName: "Halpert", 
      phoneNumber: "(562) 650-6969", 
      confirmationStatus: "Confirmed"})
  }
  return (
      <>
        <button className="rounded-md border border-black bg-violet-600 px-4 py-2 text-xl shadow-sm hover:bg-orange-300 hover:text-black"
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