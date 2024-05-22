"use client"
import React from "react";
import { Button } from "./ui/button";
import { Fade } from "react-awesome-reveal";
import {  toast } from 'sonner';
import { updateOrder } from "./actions/updateorder";
import { useRecoilState } from "recoil";
import { checkOrderAtom } from "@/store/atoms/checkatom";

export default function Ordercard(props: any) {
  const [check,setCheck] = useRecoilState(checkOrderAtom)
  const handleUpdateOrder = async (status: string) => {
    try {
      await updateOrder(status, props.orderid);
      setCheck(check=>check+1)
      toast.success('Updated successfully');
    } catch (error) {
      toast.error('Failed to update order status');
    }
  };

  return (
    <Fade>
      <div className="min-h-64 w-96 rounded-sm shadow-sm border-2 border-gray-100 flex justify-around items-center bg-white">
        <div className="h-full w-full py-2">
          <div className="h-16 w-full flex justify-around items-start pl-2">
            <div className="h-full w-1/2 flex items-center justify-center flex-col">
              <div className="font-semibold">Order No: {props.orderid}</div>
              <div className="font-semibold">Rs. {props.price}</div>
            </div>
            <div className="w-1/2 h-full font-semibold flex justify-center items-center flex-col">
              <div>Order Status:</div>
              {props.orderstatus}
            </div>
          </div>
          <div className="w-full min-h-32 flex flex-col justify-around items-center">
            {props.orderproduct.map((orderproduct:any,index:number)=>{
              return <div key={index} className="flex  w-full justify-between  px-10 items-center">
                <div>
                {orderproduct.product.name}
                </div>
                <div>
                {orderproduct.quantity}
                </div>
              </div>
            })}
          </div>
          <div className="flex justify-around items-center h-16 pl-2 font-bold">
            <Button variant={"delivered"} onClick={() => handleUpdateOrder("delivered")}>
              Delivered
            </Button>
            <Button variant={"ready"} onClick={() => handleUpdateOrder("ready")}>
              Ready
            </Button>
            <Button variant={"outline"}>View order</Button>
          </div>
        </div>
      </div>
    </Fade>
  );
}
