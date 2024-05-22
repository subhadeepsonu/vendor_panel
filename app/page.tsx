"use client"
import Homedash from "@/components/HomeDash";
import { redirect } from "next/navigation";
import {  useSetRecoilState} from "recoil";
import { userAtom } from "@/store/atoms/checkatom";
import { useSession } from "next-auth/react";
export default  function Home() {
  const data  = useSession()
  if(data.status==="unauthenticated") return redirect('/api/auth/signin')
  const setUser = useSetRecoilState(userAtom)
  console.log(data)
  setUser(data.data?.user.email!)
  return (
    <div className=" w-full min-h-screen">
      <Homedash></Homedash>
    </div>
  );
}
