import { auth } from "@/auth";
import Login from "@/components/pages/login";
import { redirect } from "next/navigation";
export  default async function (){
    const session = await auth()
    if(session){
      redirect('/')
    }
    return <Login></Login>
}