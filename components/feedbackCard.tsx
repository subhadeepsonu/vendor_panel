import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export default function FeedbackCard(props:any){
    return <div className="h-32 w-10/12 bg-white border-gray-200 shadow-sm border-2 m-4 rounded-md flex">
           <div className="flex justify-around items-center w-2/5 border-r-2 border-gray-200 ">
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
            <div className="flex justify-center items-center p-3">
                {props.feedback}
            </div>
    </div>
}