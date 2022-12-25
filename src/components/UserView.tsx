import React from 'react';
import {signOut, useSession} from 'next-auth/react';
import CreateAppointmentButton from './CreateAppointmentButton';
import { trpc } from "../utils/trpc";
import { env } from "../env/client.mjs";

const TopTitle: React.FC = () => {
   const { data: sessionData } = useSession();
  return (
    <>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>About Alyssa</a></li>
        <li><a>Terms Of Service</a></li>
        <li><a>Meet The Devs</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
     <div className="flex flex-row flex-grow-[4] justify-start items-center pr-9">
            <h2 className="text-center text-2xl font-bold"> Peaches Beauty</h2>
          </div>
  </div>
  <div className="navbar-end">
     <button
              className="rounded-md border border-black bg-violet-50 px-3 py-2 md:text-base lg:text-lg shadow-sm hover:bg-violet-100"
              onClick={()=>signOut({callbackUrl: "/"})}
            >
              {sessionData ? "Sign out" : "Sign in"}
            </button>
  </div>
</div>
    </>
  )
}
const Hero: React.FC = () => {
    return(
      <>
      <div className="hero mt-7 min-h-[380px]" style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp7712146.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <CreateAppointmentButton/>
    </div>
  </div>
</div>
      </>
    )
}

const UserView: React.FC = () => {
  return (
    <>

    <TopTitle/>
    <Hero/>
    
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