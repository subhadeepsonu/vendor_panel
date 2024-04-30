import { Button } from "./ui/button";

export default function Productcard(props:any){
    return <div className="w-96 h-96  rounded-sm border-2 border-gray-100 shadow-sm hover:scale-105 duration-150">
        <img className="h-60 w-full  rounded-t-sm object-cover" src={props.imgurl} alt="image"></img>
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