import React from 'react';
import { useSession } from "next-auth/react";

interface Props {
  // add any props that your component may need
}

const Form: React.FC<Props> = (props) => {
  const { data: sessionData } = useSession();
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [address, setAddress] = React.useState('');
  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // add code to handle form submission here
  }

  return (
    <>
    <div className='px-8 '>
    <img className="mask mask-circle block m-auto px-8 mt-10 mb-8" src={sessionData?.user?.image ? `${sessionData?.user?.image}` : "https://placeimg.com/160/160/arch"} />
    <div className='font-bold text-center text-gray-700 text-2xl mb-8'>{sessionData?.user?.email}</div>
    
    <form onSubmit={handleSubmit} className="flex flex-col mt-4">
      <label htmlFor="firstName" className="block font-bold text-gray-700 text-sm mb-2">First Name</label>
      <input 
        type="text" 
        id="firstName"
        placeholder='Sinbad' 
        value={firstName} 
        onChange={e => setFirstName(e.target.value)}
        className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300" 
      />
      <label htmlFor="lastName" className="block font-bold text-gray-700 text-sm mb-2 mt-4">Last Name</label>
      <input 
        type="text" 
        id="lastName"
        placeholder='Morpheus' 
        value={lastName} 
        onChange={e => setLastName(e.target.value)}
        className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300" 
      />
      <label htmlFor="phoneNumber" className="block font-bold text-gray-700 text-sm mb-2 mt-4">Phone Number</label>
      <input 
        type="text" 
        id="phoneNumber"
        placeholder='(562) 555-5555' 
        value={phoneNumber} 
        onChange={e => setPhoneNumber(e.target.value)}
        className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300" 
      />
       <label htmlFor="address" className="block font-bold text-gray-700 text-sm mb-2 mt-4">Address</label>
      <input 
        type="text" 
        id="address"
        placeholder='P Sherman 42 Wallaby Way Sydney' 
        value={address} 
        onChange={e => setAddress(e.target.value)}
        className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300" 
      />
      
      
      </form>
        
            <button className="mt-8 float-right px-4 py-2 bg-orange-500 text-white font-bold rounded-full btn ">Submit</button>
        </div>

    </>
  )
};
  export default Form;
