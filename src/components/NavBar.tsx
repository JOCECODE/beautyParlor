import React from 'react';
import {signOut, useSession} from 'next-auth/react';

const NavBar = () => {
  const { data: sessionData } = useSession();

  return (
    <div
          className="container flex flex-row justify-end items-center rounded-lg p-4 bg-gradient-to-br from-orange-300 to-red-300"
        >
          <div className="flex flex-row flex-grow-[4] justify-start items-center pl-3">
            <h2 className=" text-3xl font-bold"> Peaches Beauty</h2>
          </div>
          <div className="flex flex-row justify-end items-center flex-grow pr-3">
            <button
              className="rounded-md border border-black bg-violet-50 px-3 py-2 md:text-base lg:text-lg shadow-sm hover:bg-violet-100"
              onClick={()=>signOut({callbackUrl: "/"})}
            >
              {sessionData ? "Sign out" : "Sign in"}
            </button>
          </div>

        </div>
  )
}

export default NavBar;