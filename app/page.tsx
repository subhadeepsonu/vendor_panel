import { auth } from "@/auth";
import Homedash from "@/components/HomeDash";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await auth()
  if(!user) return redirect('/api/auth/signin')
  return (
    <div className=" w-full min-h-screen">
      <Homedash></Homedash>
    </div>
  );
}
