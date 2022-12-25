import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import AdminView from "../components/AdminView";
import NavBar from "../components/NavBar";
import UserView from "../components/UserView";

const Dashboard: NextPage = (props) => {
  const { data: sessionData } = useSession();
  return (
    <>
      {
        sessionData && (
          <div
            className="container min-h-screen flex flex-col justify-start items-center gap-2 min-w-full p-2"
          >
            {/* nav */}
            {/* body */}
            {
              sessionData.user?.role === 'admin' ? <> <NavBar/> <AdminView /></> : <UserView />
            }

          </div>
        )
      }
    </>
  )
}
export default Dashboard;

