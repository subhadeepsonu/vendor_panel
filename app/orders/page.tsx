"use client"
import { useRecoilValue} from "recoil"
import Ordercard from "@/components/ordercard";
import Loading from "./loading";

import { checkOrderAtom, orderList } from "@/store/atoms/checkatom";
export default function Orders(){
    const orders = useRecoilValue(orderList)
    
    return <div className=" flex justify-center items-start w-full min-h-screen ">
     <div className="grid grid-cols-3 gap-5">
     {orders.map((order:any, index:number) => (
            <Ordercard 
              key={index} 
              orderstatus={order.orderStatus} 
              orderid={order.orderid} 
              price={order.totalamount} 
              orderproduct={order.orderproduct}
              
            />
          ))}
    </div>
    </div>

}