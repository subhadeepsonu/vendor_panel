import Homedash from "@/components/HomeDash";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
export default async  function Home() {
  const session = await auth()
  console.log(session)
  if(!session) return redirect('/api/auth/signin')
  return (
    <div className=" w-full min-h-screen">
      <Homedash></Homedash>
    </div>
  );
}
