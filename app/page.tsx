import Homedash from "@/components/HomeDash";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { json } from "stream/consumers";
export default async  function Home() {
  const session = await auth()
  const role = session?.user.role
  if(!session) return redirect('/api/auth/signin')
  return (
    <div className=" w-full min-h-screen">
      <Homedash></Homedash>
    </div>
  );
}
