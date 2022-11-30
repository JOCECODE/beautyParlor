import React from 'react';
import { type Appointment } from '@prisma/client';

type ApptQueryDisplayProps = {
  queryData: Appointment[] | undefined
}

const ApptQueryDisplay: React.FC<ApptQueryDisplayProps> = ({ queryData }) => {
  return (
    <>
      <h2>
        Appointments
      </h2>
      <div
        className='w-4/5 font-mono'
      >
        { queryData?.map( appt => (
          <p
            key={appt.id}
          >
            {appt.id} --- {appt.service} @ {appt.apptTime}
          </p>
        )
        )}
      </div>
    </>

  )
}

export default ApptQueryDisplay;