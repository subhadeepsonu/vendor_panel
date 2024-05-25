"use client"
import Homedash from "@/components/HomeDash";
import { redirect, useRouter } from "next/navigation";
import {  useSetRecoilState} from "recoil";
import { userAtom } from "@/store/atoms/checkatom";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
export default  function Home() {
  const { data, status } = useSession();
  const router = useRouter();
  useEffect(() => {
      if (status === "unauthenticated") {
        router.push('/api/auth/signin');
      }
    }, [status, router]);
  const setUser = useSetRecoilState(userAtom)
  setUser(data?.user.name!)
  return (
    <div className=" w-full min-h-screen">
      <Homedash></Homedash>
    </div>
  );
}
