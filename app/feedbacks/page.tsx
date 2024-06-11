import { auth } from "@/auth";
import AddRestaurantButton from "@/components/addRestaurantButton";
import Feedbacks from "@/components/pages/feedback";
import SignOutButton from "@/components/signoutButton";
import { redirect } from "next/navigation";
export default async function(){
  const session = await auth()
  if(!session){
    redirect('/api/auth/signin')
  }
  else{
    if(!session.user.brandId){
      return <div className="h-screen flex justify-center flex-col items-center">
        <p className="m-5 text-xl">looks like u dont have restaurant to ur name 🥺 login with currect mail id</p>
        <AddRestaurantButton></AddRestaurantButton>
      </div>
    }
  }
  return (
    <div className="w-full min-h-screen">
      <Feedbacks brandId={session.user.brandId}></Feedbacks>
    </div>
  );
}