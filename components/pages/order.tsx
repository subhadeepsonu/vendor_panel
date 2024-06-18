"use client"
import Ordercard from "@/components/ordercard";
import {  useRecoilValue, useSetRecoilState} from "recoil"
import { Button } from "@/components/ui/button"
import {  useQuery } from "@tanstack/react-query";
import GetAllOrders from "@/components/actions/getAllOrders";
import { useSession } from "next-auth/react";
import Loading from "@/app/orders/loading";
import { category, filterOrderListAtom, orderIdAtom, orderListAtom } from "@/store/atoms/checkatom";
import { Input } from "../ui/input";
export default function Orders(){
  const session = useSession()
  const setCategory = useSetRecoilState(category)
  const setOrderList = useSetRecoilState(orderListAtom)
  const FilterList = useRecoilValue(filterOrderListAtom)
  const setOrderId = useSetRecoilState(orderIdAtom)
  const {data,error,isLoading} :any = useQuery({
    queryKey:["order"],
    queryFn:()=>GetAllOrders(session.data?.user.brandId!)
    
  })
  if(isLoading){
    return <Loading></Loading>
  }
  if(error){
    return <div className="h-screen flex justify-center items-center">Error: {error.message}</div>
  }
    if(data){
      setOrderList(data)
    if(data.length===0){
      return <div className="flex justify-center items-center flex-col">
        <div className="lg:w-1/2 w-full h-20 flex items-center justify-around">
    <Button onClick={()=>{
      setCategory("all")
    }}>All</Button>
    <Button onClick={()=>{
      setCategory("Cooking")
    }}>Cooking</Button>
    <Button onClick={()=>{
      setCategory("Ready")
    }}>Ready</Button>
    <Button onClick={()=>{
      setCategory("Delivered")
    }}>Delivered</Button>
    <Input onChange={(e)=>{
      setOrderId(e.target.value)
    }} type="number" placeholder="OrderId" className="w-20 dark:border-2 dark:border-gray-600">
    </Input>
    </div>
      <div className="h-screen flex justify-center items-center lg:text-2xl font-bold">You currently have no orders 🥺</div>
      </div>
    }
    else{
      return <div className=" flex flex-col justify-start items-center w-full min-h-screen ">
      <div className="lg:w-1/2 w-full h-20 flex items-center justify-around">
    <Button size={"sm"} onClick={()=>{
      setCategory("all")
    }}>All</Button>
    <Button size={"sm"} onClick={()=>{
      setCategory("Cooking")
    }}>Cooking</Button>
    <Button size={"sm"} onClick={()=>{
      setCategory("Ready")
    }}>Ready</Button>
    <Button size={"sm"} onClick={()=>{
      setCategory("Delivered")
    }}>Delivered</Button>
    <Input onChange={(e)=>{
      setOrderId(e.target.value)
    }} type="number" placeholder="OrderId" className="w-20 dark:border-2 dark:border-gray-600">
    </Input>
    </div>
    <div className="flex justify-center items-center">  
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
     {FilterList.map((order:any, index:number) => (
            <Ordercard 
              key={index} 
              orderstatus={order.orderStatus} 
              orderid={order.orderId} 
              price={order.totalAmount} 
              orderproduct={order.orderProducts}
            />
          ))}
    </div>
    </div>
    </div>
    }
    }
  }
