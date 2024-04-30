import { Button } from "./ui/button";

export default function Ordercard(){
    return <div className="h-40 w-96  rounded-sm shadow-md border-2 border-gray-200 flex justify-between items-center">
        <div className="h-full w-2/3 bg-red-200 ">
            <div className="h-1/2 w-full bg-green-200 flex flex-col justify-around items-start pl-2">
                <div className="font-bold text-lg">
                    #orderid
                </div>
                <div>
                    name
                </div>
            </div>
            <div className="flex justify-start items-center h-1/2 pl-2 font-bold ">
                price
            </div>
        </div>
        <div className="h-full w-1/3 bg-gray-300 flex flex-col justify-center items-center">
        <div className="h-1/2 w-full flex justify-center items-center font-bold ">
            order status
        </div>
        <Button variant={"outline"}>View order</Button>
        </div>
    </div>
}