import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { ArrowRightIcon, ListBulletIcon } from "@radix-ui/react-icons";
export default function Ordercard(props:any){
        return <div className="bg-white w-9/12 flex">
        <div className="bg-white rounded-sm flex w-full p-2 h-16 border-b-2 border-gray-300 justify-around items-center">
            <div className="flex justify-center items-center w-1/6 ">
                <div className="">
       
            </div>
            <div >
                {props.name}
            </div>
            </div>
                <div className="w-1/6 flex justify-center items-center">  
                {props.date}
                </div>
                <div className="w-1/6 flex justify-center items-center">
 
                {props.time}
                </div>
                
        
            <div className="w-1/6 flex justify-center items-center">
                
                {props.billno}
            </div>
            <div className="w-1/6 flex justify-center items-center">   
            Rs. {props.price}
            </div>
            <div className="flex justify-center items-center w-1/6">
            
            <Button variant={"link"} className="">View bill</Button>
            <ArrowRightIcon></ArrowRightIcon>
            </div>
        </div>
        </div>
}