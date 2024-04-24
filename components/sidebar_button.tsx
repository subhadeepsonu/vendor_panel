"use client"
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Sidebarbutton(props:any){
    const router = useRouter()
    return  <Button variant={"ghost"} onClick={()=>{
        router.push(props.href)
    }} className="justify-start h-16 w-full text-xl text-white">
 {props.button}</Button>
}