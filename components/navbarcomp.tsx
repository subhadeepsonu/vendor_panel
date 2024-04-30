"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

export default function  Navbarcomp(props:any){
    const pathname = usePathname();
    const isPageActive = props.check === pathname;
    console.log(isPageActive)
    return <Link href={props.href}>
        
        <div  className={`text-zinc-400 hover:text-zinc-950 font-semibold ${isPageActive ? "text-gray-950 font-bold": ``} transition-all`}>
            
        {props.name}
        </div>
    </Link>
}