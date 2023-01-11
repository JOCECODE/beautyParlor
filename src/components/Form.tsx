import React from 'react';
import { useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
interface Props {
  // add any props that your component may need
}

const Form: React.FC<Props> = (props) => {
  const { data: sessionData } = useSession();
  
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: sessionData?.user?.email,
    phoneNumber: "",
    address: "",
  });

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  
   const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
    handleUpdate();
    console.log("check the database")
    // Do something with the form data, like send it to an API
  }
//check createAppointmentButton.tsx to add in the isLoading isError for the front end
  const mutation = trpc.user.updateUser.useMutation();
  const handleUpdate = async () => {
    mutation.mutate({
        firstName: formData.firstName, 
        lastName: formData.lastName, 
        email: `${formData.email}`, 
        phoneNumber: formData.phoneNumber, 
        address: formData.address
    })
  }

//  const updateInformation = trpc.user.updateUser.useQuery({ firstName: formData.firstName, lastName: formData.lastName, email: `${formData.email}`, phoneNumber: formData.phoneNumber, address: formData.address});
  return (
    <>
    <div className='px-8 '>
    <img className="mask mask-circle block m-auto px-8 mt-10 mb-8" src={sessionData?.user?.image ? `${sessionData?.user?.image}` : "https://placeimg.com/160/160/arch"} />
    <div className='font-bold text-center text-gray-700 text-2xl mb-8'>{sessionData?.user?.email}</div>
    
    <form onSubmit={handleSubmit} className="flex flex-col mt-4">
      <label htmlFor="firstName" className="block font-bold text-gray-700 text-sm mb-2">First Name</label>
      <input 
        type="text" 
        name="firstName"
        placeholder='Sinbad'  
        onChange={handleChange}
        className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300" 
      />
      <label htmlFor="lastName" className="block font-bold text-gray-700 text-sm mb-2 mt-4">Last Name</label>
      <input 
        type="text" 
        name="lastName"
        placeholder='Morpheus' 
        onChange={handleChange}
        className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300" 
      />
      <label htmlFor="phoneNumber" className="block font-bold text-gray-700 text-sm mb-2 mt-4">Phone Number</label>
      <input 
        type="text" 
        name="phoneNumber"
        minLength={10}
        maxLength={10}
        placeholder='(562) 555-5555'  
        onChange={handleChange}
        className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300" 
      />
       <label htmlFor="address" className="block font-bold text-gray-700 text-sm mb-2 mt-4">Address</label>
      <input 
        type="text" 
        name="address"
        placeholder='P Sherman 42 Wallaby Way Sydney'  
        onChange={handleChange}
        className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300" 
      />
      
       <button className="mt-8 float-right px-4 py-2 bg-orange-500 text-white font-bold rounded-full btn" type="submit">Submit</button>
      
      </form>
        
            
        </div>

    </>
  )
};
  export default Form;
