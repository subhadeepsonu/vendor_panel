import { Button } from "./ui/button";

export default function Ordercard(props:any){
    return <div className="h-32 w-96  rounded-sm shadow-sm border-2 border-gray-100 flex justify-between items-center">
        <div className="h-full w-2/3  py-2">
            <div className="h-2/3 w-full  flex flex-col justify-around items-start pl-2 ">
                <div className="font-bold text-lg">
                    #orderid
                </div>
                <div>
                    name
                </div>
            </div>
            <div className="flex justify-start items-center h-1/3 pl-2 font-bold ">
                price
            </div>
        </div>
        <div className="h-full w-1/3  flex flex-col justify-around items-center">
        <div className="h-1/2 w-full flex justify-center items-center font-bold ">
            order status
        </div>
        <Button variant={"outline"}>View order</Button>
        </div>
    </div>
}