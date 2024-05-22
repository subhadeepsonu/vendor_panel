"use client"
import {useRecoilState, useRecoilValue} from "recoil"
import Ordercard from "@/components/ordercard";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Loading from "./loading";

import { checkAtom } from "@/store/atoms/checkatom";
export default function Orders(){
    const [orders,setOrders]= useState<any>([])
    const check = useRecoilValue(checkAtom)
    useMemo(()=>{
        const fetchorders = async ()=>{
            try {
                console.log("haha")
                const responce = await axios.get('http://localhost:3000/api/orders')
                setOrders(responce.data.data)
                console.log(responce.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchorders()
    },[check])
    return <div className=" flex justify-center items-start w-full min-h-screen ">
     <div className="grid grid-cols-3 gap-5">
     {orders.length > 0 ? (
          orders.map((order:any, index:number) => (
            <Ordercard 
              key={order.orderid} 
              orderstatus={order.orderStatus} 
              orderid={order.orderid} 
              price={order.totalamount} 
              orderproduct={order.orderproduct}
            />
          ))
          
        ) : (
          <div>
            <Loading></Loading>
          </div>
        )}
    </div>
    </div>

}