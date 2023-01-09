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
            className=""
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

