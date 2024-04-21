import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { ArrowRightIcon, ListBulletIcon } from "@radix-ui/react-icons";
export default function Ordercard(props:any){
        return <div className="bg-white rounded-sm flex w-9/12 h-16 m-5 justify-around items-center">


            <div className="flex justify-center items-center w-1/6 ">
                <div className="">
            <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
    </Avatar>
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
}