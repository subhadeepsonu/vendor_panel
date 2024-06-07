"use client";
import Homedash from "@/components/HomeDash";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
export default function Home() {
  const { data, status } = useSession();

  const router = useRouter();
  console.log(data)
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/api/auth/signin');
    } else if (status === "authenticated" && data?.user?.name) {
      window.localStorage.setItem("user data",data.user.name)
    }
  }, [status, router, data]);
  return (
    <div className="w-full min-h-screen">
      <Homedash />
    </div>
  );
}
