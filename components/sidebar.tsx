"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Button } from "./ui/button";
import link from "next/link";

export default function Sidebar() {
    const pathname = usePathname();
    return (
        <aside className="h-screen w-[300px]  shadow-sm fixed bg-white   border-r-2 border-gray-300 ">
                <img src="https://utfs.io/f/380742ff-14cc-4f18-8c5b-ac0be901b9a3-1tpn4o.jpg" className=""></img>
            <div className="flex flex-col
             justify-around items-center w-[300px] h-[350px] ">
                <Button 
                variant={"default"}
                 className="w-[270px]">Products</Button>
                <Button variant={"default"} className="w-[270px]">Orders</Button>
                <Button variant={"default"} className="w-[270px]">Analytics</Button>
                <Button variant={"default"} className="w-[270px]">Feedback</Button>
                
                
            </div>
            
        </aside>
    );
}