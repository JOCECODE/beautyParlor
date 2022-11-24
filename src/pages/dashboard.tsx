import { type NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import CreateAppointmentButton from "../components/CreateAppointmentButton";
import { env } from "../env/client.mjs";


const Dashboard: NextPage = () => {

  const { data: sessionData } = useSession();

  return (
    <>
      <div
        className="container min-h-screen flex flex-col justify-start items-center min-w-full p-2"
      >
        {/* nav */}
        <div
          className="container min-w-full flex flex-row justify-end items-center items p-4 bg-gradient-to-br from-orange-300 to-red-300"
        >
          <div className="flex flex-row flex-grow-[4] justify-start items-center pl-3">
            <h2 className=" text-3xl font-bold"> Peaches Beauty</h2>
          </div>
          <div className="flex flex-row justify-end items-center flex-grow">
            <button
              className="rounded-md border border-black bg-violet-50 px-4 py-2 text-xl shadow-sm hover:bg-violet-100"
              onClick={()=>signOut({callbackUrl: "/"})}
            >
              {sessionData ? "Sign out" : "Sign in"}
            </button>
          </div>

        </div>

        {/* body */}
        <div
          className="container h-full w-full flex flex-col justify-start items-center bg-slate-200 p-2"
        >
          <PrismaShowcase />

          <CreateAppointmentButton />

        </div>
      </div>
    </>
  )
}
export default Dashboard;

const PrismaShowcase: React.FC = () => {

  const { data: sessionData } = useSession();

  return (
    <>
      {
        sessionData?.user?.email && (
          <RoleDisplay email={sessionData.user.email }/>
        )
      }
    </>
  );
}

type RoleProps = {
  email: string
}

const RoleDisplay: React.FC<RoleProps> = ({email}) => {
  const userRole= trpc.example.getRole.useQuery({ email: email});


  return (
    <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-2xl text-blue-500">
          current user is {email}

        </p>
        <p className="text-2xl text-blue-500">
          and i got my role <b>{userRole.data?.role}</b> from Prisma
        </p>

        <p className="text-2xl text-blue-500">
          you {env.NEXT_PUBLIC_ADMIN_EMAIL === email ? "SHOULD" : "SHOULD NOT"} be an ADMIN
        </p>

    </div>
  )
}