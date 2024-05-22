
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { FaHotjar, FaRupeeSign, FaSadCry, FaShoppingBag } from "react-icons/fa";

export default  function Homedash(){
  
    return <div className="w-full flex flex-col">
         
     <div className="flex justify-around items-center pt-2 gap-5 px-16 my-16">
       
      <div className="w-80 h-52 bg-white border-2 border-gray-100 shadow-sm rounded-sm">
      <div className="w-full h-1/2  rounded-t-sm flex flex-col justify-around items-center">
            <div className="text-2xl font-bold">
                Total Orders
            </div>
            <div className="text-2xl">
                <FaShoppingBag></FaShoppingBag>
            </div>
      </div>
      <div className="flex justify-center text-green-600 items-center text-2xl font-semibold w-full h-1/2 ">
        2137
      </div>
      </div>
      <div className="w-80 h-52 bg-white border-2 border-gray-100 shadow-sm rounded-sm">
      <div className="w-full h-1/2  rounded-t-sm flex flex-col justify-around items-center">
            <div className="text-2xl font-bold">
                Total Revenue
            </div>
            <div className="text-2xl">
            <FaRupeeSign></FaRupeeSign>
            </div>
      </div>
      <div className="flex justify-center text-green-600 items-center text-2xl font-semibold w-full h-1/2 ">
        Rs.37564
      </div>
</div>
<div className="w-80 h-52 bg-white border-2 border-gray-100 shadow-sm rounded-sm">
<div className="w-full h-1/2  rounded-t-sm flex flex-col justify-around items-center">
            <div className="text-2xl font-bold">
                Top Selling
            </div>
            <div className="text-2xl font-bold" >
                <FaHotjar></FaHotjar>
            </div>
      </div>
      <div className="flex justify-center items-center text-green-600 text-2xl font-semibold w-full h-1/2 ">
        Butter chicken
      </div>
</div>
<div className="w-80 h-52 bg-white border-2 border-gray-100 shadow-sm rounded-sm">
<div className="w-full h-1/2  rounded-t-sm flex flex-col justify-around items-center">
            <div className="text-2xl font-bold">
                Out of Stock
            </div>
            <div className="text-2xl font-bold">
                <FaSadCry></FaSadCry>
            </div>
      </div>
      <div className="flex justify-center items-center text-red-600 text-lg font-semibold w-full h-1/2 ">
        7 products out of stock
      </div>
</div>
      </div>
      <div>

      </div>
      <div className="flex justify-between items-center px-16 py-8  ">
      <div className="text-3xl font-bold">
    Recent orders
      </div>
      <Link href={"orders"}>View All </Link>
      </div>
      <div className="flex justify-around items-center w-full">
      {/* <Ordercard orderstatus="cooking"></Ordercard>
        <Ordercard orderstatus="cooking"></Ordercard>
        <Ordercard orderstatus="delivered"></Ordercard> */}

      </div>
    </div>
}