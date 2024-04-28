import Image from "next/image";
export default function Profilecard(props:any){
    return  <div className="w-10/12 bg-white border-2 border-gray-200 rounded-sm shadow-sm h-2/3 flex ">
        <div className=" w-1/3 flex flex-col justify-center items-center border-r border-gray-200">
    <div className="border-2 border-gray-200 m-2">
        <img src="https://content.jdmagicbox.com/comp/remote/w4/0141px141.x141.180918191436.x9w4/catalogue/bits-n-bites-tripolia-bazar-jaipur-fast-food-k10y2fbkcj.jpg" alt="logo"></img>
    </div>
    <div className=" flex justify-center items-center text-2xl font-bold">
        Bits and Bites
    </div>
    </div>
    <div className="bg-white w-2/3">
    <div className=" flex justify-around items-center h-1/2">
    <div className=" w-1/3 h-2/3 border-2 bg-white border-gray-200 rounded-sm shadow-sm m-2 ">
        total products 
    </div>
    <div className=" w-1/3 h-2/3 border-2 bg-white border-gray-200 rounded-sm shadow-sm m-2">
        out of stock products
    </div>
   
    </div>
    <div className=" flex justify-around items-center h-1/2">
    <div className=" w-1/3 h-2/3 border-2 bg-white border-gray-200 rounded-sm shadow-sm m-2">
        no of orders
    </div>
    <div className=" w-1/3 h-2/3 border-2 bg-white border-gray-200 rounded-sm shadow-sm m-2">
    earnings 
    </div>
   
    </div>

    </div>
    </div>
}