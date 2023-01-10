import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Loader from "./Loader";

const Home: NextPage = (props) => {
  
  const { data: sessionData } = useSession();
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/dashboard");
  }

  return (
    <>
    
     
      <button
              className="rounded-md border border-black bg-violet-50 px-4 py-2 text-xl shadow-lg hover:bg-violet-100"
              onClick={sessionData ? () => signOut() : () => signIn(undefined, {callbackUrl: '/dashboard'})}
            >
              {sessionData ? "Sign out" : "Sign in"}
            </button>
      {sessionData ? <main onTouchStart={handleSignIn} className="container mx-auto flex min-h-screen items-center justify-center">    
      <p className="text-center">{`Welcome Back, ${sessionData?.user?.email}.`} <span className="text-center"> Press Anywhere To Continue</span></p>
      </main> 
      
      : 
      
      <main onTouchStart={() => signIn(undefined, {callbackUrl: '/dashboard'})} className="container mx-auto flex min-h-screen flex-row items-center justify-center p-4">    
      Touch Anywhere To Continue
      </main> }
      
    </>
  );
};

export default Home;
