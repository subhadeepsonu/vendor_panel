import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaStar } from "react-icons/fa"
export default function FeedbackCard(props:any){
    return <div className=" w-full bg-white  m-4 rounded-md flex flex-col cursor-pointer border-b-2 border-gray-200">
           <div className="flex  justify-start gap-4 items-center  ">
            <div className="">
                <Avatar className="ml-2 h-12 w-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex justify-between  w-full items-center">
            <div className="font-medium text-md mt-3 m-3">
            <div >
                {props.name}
            </div>
            <div className="flex justify-start items-center pt-2">
                5<FaStar></FaStar>
            </div>
            </div>
            <div className="m-3 font-light text-sm">
                2 days ago
            </div>
            </div>
            </div>
            <div className="flex justify-center items-center p-3 w-fit ml-14 font-light">
                {props.feedback}
            </div>
    </div>
}