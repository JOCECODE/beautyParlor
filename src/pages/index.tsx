import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";


const Home: NextPage = (props) => {
  const hello = trpc.example.hello.useQuery({ text: "from Me to You." });
  const { data: sessionData } = useSession();
  

  return (
    <>
      <Head>
        <title>My Beauty Parlor</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-row items-center justify-center p-4">
        {/* hero */}
        <div className="container mx-auto flex flex-col h-full items-center justify-center">
          <h1 className=" text-5xl font-extrabold text-gray-700">
            My <span className="text-orange-300">Beauty</span> Parlor
          </h1>
          <div className="flex w-full items-center justify-center pt-6 text-2xl text-red-300">
            {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
          </div>
        </div>
        {/* login */}
        <div className="container mx-auto flex flex-col h-full items-center justify-center p-2">
          <div className="flex flex-col items-center justify-center gap-2">
            <button
              className="rounded-md border border-black bg-violet-50 px-4 py-2 text-xl shadow-lg hover:bg-violet-100"
              onClick={sessionData ? () => signOut() : () => signIn(undefined, {callbackUrl: '/dashboard'})}
            >
              {sessionData ? "Sign out" : "Sign in"}
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
