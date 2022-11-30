import React from 'react';
import { type User } from '@prisma/client';

type CustomerQueryDisplayProps = {
  queryData: User[] | undefined
}

const CustomerQueryDisplay: React.FC<CustomerQueryDisplayProps> = ({ queryData }) => {
  return (
    <>    
      <h2>
        Customers
      </h2>
      <div
        className='w-4/5 font-mono'
      >
        { queryData?.map( customer => (
          <p
            key={customer.id}
          >
            {customer.id} --- {customer.email} --- <span className=' text-rose-400'>{customer.role}</span>
          </p>
        )
        )}
      </div>
    </>

  )
}

export default CustomerQueryDisplay