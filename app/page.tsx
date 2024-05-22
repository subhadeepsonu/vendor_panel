import Homedash from "@/components/HomeDash";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { useSetRecoilState } from "recoil";
import { userAtom } from "@/store/atoms/checkatom";
export default async  function Home() {
  const session = await auth()
  const name = session?.user.name
  // const setUser = useSetRecoilState(userAtom)
  // setUser(name!)
  if(!session) return redirect('/api/auth/signin')
  return (
    <div className=" w-full min-h-screen">
      <Homedash></Homedash>
    </div>
  );
}
