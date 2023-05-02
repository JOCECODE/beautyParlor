import React from 'react';
import {trpc } from "../utils/trpc";
import Form from "./Form";
import { useSession } from "next-auth/react";
import {useRouter} from "next/router";
import TorbLoading from "./TorbLoading";

const UserView: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // simulate a long loading process
    setTimeout(() => {
      setLoading(false);
    }, 450);
  }, []);
    const router = useRouter();
  const { data: sessionData } = useSession();
    const {data: gayData} = trpc.user.getUser.useQuery({email: `${sessionData?.user?.email}`}
    )
   if (gayData?.isUpdated === true && loading === false) {
    router.push("/sinbad");
   }
   else if (gayData?.isUpdated === false) {
    return <Form/>
   }
  return (
    <>
    {loading ? <TorbLoading/> : <></>}
      {/* can replace this with a loading component it will show very quickly */}
    </>
      
  )
}
export default UserView;
