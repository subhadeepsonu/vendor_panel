import Link from "next/link";
import Navbarcomp from "./navbarcomp";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Navbar(){
    return <div className="h-16 w-full border-gray-300 border-b-2 shadow-md mb-2 flex justify-between items-center">
        <div className=" flex justify-center items-center">
        <img src="https://utfs.io/f/795065b3-e04f-4d76-9f93-99c13e9673a2-1m0e46.png" className="h-16"></img>
        <div className="text-purple-600 font-bold text-2xl">
            Cheez E Choice
        </div>
        </div>
        
        <div className="w-1/3 flex justify-around items-center">
            <Navbarcomp name="Home" href="/" check=""></Navbarcomp>
            <Navbarcomp name="Menu" href="/products" check="products"></Navbarcomp>
            <Navbarcomp name="Orders" href="/orders" check="orders"></Navbarcomp>
            <Navbarcomp name="Feedbacks" href="/feedbacks" check="feedbacks"></Navbarcomp>
            <Navbarcomp name="Contact" href="/contactus" check="contactus"></Navbarcomp>
            <Link href="profile" className=" h-12">
                <Avatar className="ml-2 h-12 w-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </Link>
        </div>
    </div>
}