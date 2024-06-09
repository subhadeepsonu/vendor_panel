"use client"
import Ordercard from "@/components/ordercard";
import { useRecoilState, useRecoilValue} from "recoil"
import { Button } from "@/components/ui/button"
import { categoryAtom, checkOrderAtom } from "@/store/atoms/checkatom"
import {  useQuery } from "@tanstack/react-query";
import GetAllOrders from "@/components/actions/getAllOrders";
import { useSession } from "next-auth/react";
import Loading from "@/app/menu/loading";
export default function Orders(){
  const session = useSession()
  const [category,setCategory] = useRecoilState(categoryAtom)
  const check = useRecoilValue(checkOrderAtom)
  const {data,error,isLoading}= useQuery({
    queryKey:["orders",category,check],
    queryFn:()=>GetAllOrders(session.data?.user.brandId!)
  })
  console.log(data)
  if(isLoading){
    return <Loading></Loading>
  }
  if(error){
    return <div className="h-screen flex justify-center items-center">Error: {error.message}</div>
  }
    if(data){
    if(data.length===0){
      return <div className="h-screen flex justify-center items-center text-2xl font-bold">You currently have no orders 🥺</div>
    }
    else{
      return <div className=" flex flex-col justify-start items-center w-full min-h-screen ">
      <div className="w-1/2 h-20 flex items-center justify-around">
    <Button onClick={()=>{
      setCategory("all")
    }}>All</Button>
    <Button onClick={()=>{
      setCategory("cooking")
    }}>Cooking</Button>
    <Button onClick={()=>{
      setCategory("ready")
    }}>Ready</Button>
    <Button onClick={()=>{
      setCategory("delivered")
    }}>Delivered</Button>
    </div>
     <div className="grid grid-cols-3 gap-5 ">
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
