"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"  
import { Button } from "../ui/button"
import { signIn } from "next-auth/react"
import { toast } from "sonner"
import { FaGoogle } from "react-icons/fa"
const onSubmit = ()=>{
    try {
    signIn("google")
    } catch (error) {
        toast.error('something went wrong')
    }
}
export default function Login(){
    return <div className="h-[80vh] w-full  flex justify-center items-center   ">
        <Card className="shadow-sm hover:shadow-lg duration-150">
            <CardHeader>
                <CardTitle>
                    Welcome Back
                </CardTitle>
                <CardDescription>

                </CardDescription>
            </CardHeader>
            <CardContent>

                <Button variant={"outline"} onClick={onSubmit} size={"lg"}><FaGoogle className="m-2 text-yellow-700"></FaGoogle>Continue with Google</Button>
            </CardContent>
        </Card>
    </div>
}