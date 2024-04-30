import { Button } from "./ui/button";

export default function ProductCard(props:any){
    return <div className="w-96 h-36  rounded-sm border-2 border-gray-100 shadow-sm  duration-150">
        <div className="flex flex-col justify-around items-center h-36 w-full p-2">
        <div className="w-full pl-2 text-lg font-bold">
            {props.name}
        </div>
        <div className="w-full pl-2 font-light text-sm">
            {props.description}
        </div>
        <div className="flex justify-between items-center w-full px-2 ">  
            <div className="font-semibold ">Rs.{props.price}</div>
            <Button>Edit item</Button>
        </div>
        </div>
    </div>
}