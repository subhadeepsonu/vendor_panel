import { auth } from "@/auth";
import AddRestaurant from "@/components/pages/addRestaurant";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await auth()
  if(!session){
    redirect('/api/auth/signin')
  }
  if(session.user.brandId){
    return <div className="h-screen w-full flex justify-center items-center lg:text-2xl font-bold">
        looks like u  already have a restaurant 😁
    </div>
  }
  return (
    <div className="w-full min-h-screen">
      <AddRestaurant></AddRestaurant>
    </div>
  );
}
