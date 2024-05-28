"use client";
import Homedash from "@/components/HomeDash";
import { useRouter } from "next/navigation";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { brandAtom, brandSelector, userAtom } from "@/store/atoms/checkatom";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
export default function Home() {
  const { data, status } = useSession();
  const router = useRouter();
  const setUser = useSetRecoilState(userAtom);
  const brandLoadable = useRecoilValueLoadable(brandSelector);
  const setBrand = useSetRecoilState(brandAtom);
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/api/auth/signin');
    } else if (status === "authenticated" && data?.user?.name) {
      console.log(data.user.name);
      window.localStorage.setItem("user data",data.user.name)
      setUser(data.user.name);
    }
  }, [status, router, data, setUser]);
  useEffect(() => {
    if (brandLoadable.state === 'hasValue') {
      console.log("Setting brand:", brandLoadable.contents.data.id);
      setBrand(brandLoadable.contents.data.id);
    }
  }, [brandLoadable, setBrand]);
  if (brandLoadable.state === 'hasError') {
    console.error("Error loading brand:", brandLoadable.contents);
    return <div>Error loading brand</div>;
  }
  return (
    <div className="w-full min-h-screen">
      <Homedash />
    </div>
  );
}
