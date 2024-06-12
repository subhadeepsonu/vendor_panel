"use client"
import { useQuery } from "@tanstack/react-query"
import Ordercard from "./ordercard"
import GetFewOrders from "./actions/getFewOrders"
export default function HomePageOrders(){
    
    const {data,error}= useQuery({
        queryKey:["feworders"],
        queryFn:()=>GetFewOrders()
      })
      console.log(data)
      if(error){
        return <div className="h-screen flex justify-center items-center">Error: {error.message}</div>
      }
        if(data){
        if(data.length===0){
          return <div className="min-h-96 flex justify-center items-center text-2xl font-bold">You currently have no orders 🥺</div>
        }
        else{
          return <div className=" flex flex-col justify-start items-center w-full min-h-96 ">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
         {data.map((order:any, index:number) => (
                <Ordercard 
                  key={index} 
                  orderstatus={order.orderStatus} 
                  orderid={order.orderId} 
                  price={order.totalamount} 
                  orderproduct={order.orderProducts}
                />
              ))}
        </div>
        </div>
        }
        }
}