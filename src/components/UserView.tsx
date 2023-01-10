import React, {useState} from 'react';
import {signOut, useSession} from 'next-auth/react';
import CreateAppointmentButton from './CreateAppointmentButton';
import { trpc } from "../utils/trpc";
import { env } from "../env/client.mjs";
import NavbarAdmin from './NavbarAdmin';
import NavBar from './NavBar';
import Loader from "./Loader";
import Form from "./Form";

const UserView: React.FC = () => {

  return (
    <>
    <div className="h-screen w-screen">
     <Form/>
    </div>
    </>
      
  )
}
export default UserView;



// const PrismaShowcase: React.FC = () => {

//   const { data: sessionData } = useSession();

//   return (
//     <>
//       {
//         sessionData?.user?.email && (
//           <RoleDisplay email={sessionData.user.email }/>
//         )
//       }
//     </>
//   );
// }

// type RoleProps = {
//   email: string
// }

// const RoleDisplay: React.FC<RoleProps> = ({email}) => {
//   const userRole= trpc.example.getRole.useQuery({ email: email});


//   return (
//     <div className="flex flex-col items-center justify-center gap-2">
//         <p className="text-2xl text-blue-500">
//           current user is {email}

//         </p>
//         <p className="text-2xl text-blue-500">
//           and i got my role <b>{userRole.data?.role}</b> from Prisma
//         </p>

//         <p className="text-2xl text-blue-500">
//           you {env.NEXT_PUBLIC_ADMIN_EMAIL === email ? "SHOULD" : "SHOULD NOT"} be an ADMIN
//         </p>

//     </div>
//   )
// }

// const AuthShowcase: React.FC = () => {
//   const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery();

//   const { data: sessionData } = useSession();

//   console.log(sessionData?.user);

//   return (
//     <div className="flex flex-col items-center justify-center gap-2">
//       {sessionData && (
//         <p className="text-2xl text-red-300">
//           Logged in as {sessionData?.user?.email}
//         </p>
//       )}
//       {secretMessage && (
//         <p className="text-2xl text-blue-500">{secretMessage}</p>
//       )}
//     </div>
//   );
// };