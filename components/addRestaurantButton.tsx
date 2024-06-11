"use client"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function AddRestaurantButton(){
    const router = useRouter()
    return <Button onClick={()=>{
        router.replace('/addRestaurant')
    }}>Add Restaurant</Button>
}