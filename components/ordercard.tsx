'use client'
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Fade } from "react-awesome-reveal";
export default function Ordercard(props: any) {
  const [colorClass, setColorClass] = useState(""); // State for color class

  // Update color class when order status changes
  useEffect(() => {
    // Set colorClass based on props.orderstatus
    switch (props.orderstatus) {
      case 'cooking':
        setColorClass("text-red-500");
        break;
      case 'ready':
        setColorClass("text-yellow-500");
        break;
      case 'delivered':
        setColorClass("text-green-500");
        break;
      default:
        setColorClass(""); // Default color or no color class
        break;
    }
  }, [props.orderstatus]); // Re-run effect when props.orderstatus changes

  return (
    <Fade>
    <div className="h-32 w-96 rounded-sm shadow-sm border-2 border-gray-100 flex justify-between items-center bg-white">
      <div className="h-full w-2/3 py-2">
        <div className="h-2/3 w-full flex flex-col justify-around items-start pl-2">
          <div className="font-bold text-lg">#orderid</div>
          <div>name</div>
        </div>
        <div className="flex justify-start items-center h-1/3 pl-2 font-bold">price</div>
      </div>
      <div className="h-full w-1/3 flex flex-col justify-around items-center">
        <div className={`h-1/2 w-full flex justify-center items-center font-bold ${colorClass}`}>
          {props.orderstatus}
        </div>
        <Button variant={"outline"}>View order</Button>
      </div>
    </div>
    </Fade>
  );
}
