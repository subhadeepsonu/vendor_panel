"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Button } from "./ui/button";
import Sidebarbutton from "./sidebar_button";
import { FaBoxOpen, FaFacebook, FaFacebookF, FaHome, FaShoppingCart, FaStar } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { MdNote } from "react-icons/md";
import { CiBoxes, CiGlobe } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { StarIcon } from "@radix-ui/react-icons";


export default function Sidebar() {
    const pathname = usePathname();
    
    return (
        <aside className="h-screen lg:w-[250px] w-[75px]  shadow-sm fixed bg-white  flex flex-col justify-between  items-center   border-r-2 border-gray-300 ">
                
            <div className="flex flex-col lg:justify-start justify-center items-center h-96 w-full  ">
            <Link href="/">
                <img src="https://utfs.io/f/363289c6-d28e-4e47-8e52-cb3a0fd47a28-1i.png" className="hidden lg:flex h-16 "></img>
                </Link>
                <Sidebarbutton
                  
                  icon= <FaHome></FaHome>
                  href="/" label="Home"></Sidebarbutton>
                <Sidebarbutton
                  
                  icon=<FaBoxOpen></FaBoxOpen>
                  href="/products" label="Products"></Sidebarbutton>
                  <Sidebarbutton
                  
                  icon= <FaShoppingCart></FaShoppingCart>
                  href="/orders" label="Orders"></Sidebarbutton>
                  <Sidebarbutton
                  
                  icon= <FaStar></FaStar>
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