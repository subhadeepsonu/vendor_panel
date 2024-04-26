"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Button } from "./ui/button";
import Sidebarbutton from "./sidebar_button";
import { FaFacebook, FaFacebookF, FaHome, FaShoppingCart } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { MdNote } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";


export default function Sidebar() {
    const pathname = usePathname();
    
    return (
        <aside className="h-screen lg:w-[250px] w-[75px]  shadow-sm fixed bg-gray-900  flex flex-col justify-between  items-center   border-r-2 border-gray-300 ">
                
            <div className="flex flex-col lg:justify-start justify-center items-center h-96 w-full gap-2 ">
            <Link href="/">
                <img src="https://utfs.io/f/380742ff-14cc-4f18-8c5b-ac0be901b9a3-1tpn4o.jpg" className="hidden lg:flex"></img>
                </Link>
                <Sidebarbutton
                  
                  icon= <FaHome></FaHome>
                  href="/" label="Home"></Sidebarbutton>
                <Sidebarbutton
                  
                  icon= <FaProductHunt></FaProductHunt>
                  href="/products" label="Products"></Sidebarbutton>
                  <Sidebarbutton
                  
                  icon= <FaShoppingCart></FaShoppingCart>
                  href="/orders" label="Orders"></Sidebarbutton>
                  <Sidebarbutton
                  
                  icon= <MdNote></MdNote>
                  href="/feedbacks" label="Feedback"></Sidebarbutton>
               
                               
            </div>
            <div className="flex flex-col w-full items-start">
            <Sidebarbutton
                  
                  icon= <CiGlobe></CiGlobe>
                  href="/contactus" label="Contact Us"></Sidebarbutton>
            <Sidebarbutton
                  
                  icon= <CgProfile></CgProfile>
                  href="/profile" label="Profile"></Sidebarbutton>
                  
            </div>
            
        </aside>
    );
}