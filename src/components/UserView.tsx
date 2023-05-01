import React from 'react';
import {trpc } from "../utils/trpc";
import Form from "./Form";
import { useSession } from "next-auth/react";
import {useRouter} from "next/router";

const UserView: React.FC = () => {
    const router = useRouter();
  const { data: sessionData } = useSession();
    const {data: gayData} = trpc.user.getUser.useQuery({email: `${sessionData?.user?.email}`}
    )
   if (gayData?.isUpdated === true) {
    router.push("/sinbad");
   }
   else if (gayData?.isUpdated === false) {
    return <Form/>
   }
  return (
    <>
      
    </>
      
  )
}
export default UserView;
