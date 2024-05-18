'use client'

import { Button } from "./ui/button";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/navigation";
export default function ProductCard(props:any){
    const router = useRouter()
    const handleUpdateStock = async () => {
        try {
            await router.push(`/products/${props.id}`);
        } catch (error) {
            console.error("Error navigating:", error);
        }
    };
    return <Fade  className="w-96 h-36  rounded-sm border-2 border-gray-100 shadow-sm  duration-150">
        <div className="flex flex-col justify-around items-center h-36 w-full p-2">
        <div className="w-full pl-2 text-lg font-bold">
            {props.name}
        </div>
        <div className="w-full pl-2 font-light text-sm">
            {props.description}
            
        </div>
        <div className="flex justify-between items-center w-full px-2 ">  
            <div className="font-semibold ">Stock:{props.stock}</div>
            <Button onClick={handleUpdateStock}>Update Stock</Button>
        </div>
        </div>
    </Fade>
}