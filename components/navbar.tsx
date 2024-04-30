import Link from "next/link";
import Navbarcomp from "./navbarcomp";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Navbar(){
    return <div className="h-16 w-full border-gray-300 border-b-2 shadow-md mb-2 flex justify-between items-center">
        <img src="https://utfs.io/f/363289c6-d28e-4e47-8e52-cb3a0fd47a28-1i.png" className="h-16"></img>
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