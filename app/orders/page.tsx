import Ordercard from "@/components/ordercard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function Orders(){
    return <div className="bg-gray-100 min-w-[1217px]">
    <div className=" w-[1150px] p-5  mx-5 mt-5 rounded-md flex justify-between items-center bg-white shadow-sm border-b-2 border-gray-300">
        <div className="font-semibold text-xl">Orders</div>
        <div className="flex w-1/3 ">
        <Input type="text" placeholder="Search" className="w-full mr-2"></Input>
        <Button className="mr-2">
            <MagnifyingGlassIcon></MagnifyingGlassIcon>
        </Button>
        
     
        </div>
        </div>

<div className="flex flex-col justify-center   items-center min-h-screen ">
<div className="bg-white rounded-sm flex w-9/12 h-16 mt-10 mb-3 justify-around items-center">
<div>
    User
</div>


    <div className="m-2">
        
    Date
    </div>
    <div>
        
    Time
    </div>
    

<div>
    
   Billno
</div>
<div>   
price
</div>

<div className="flex justify-center items-center">

Complete bill
</div>
</div>
   <Ordercard price="221" name="sonu" date="2/4/23" time ="7:00 pm" billno="11"></Ordercard>
   <Ordercard price="241" name="monu" date="2/4/23" time ="8:00 pm" billno="12"></Ordercard>
   <Ordercard price="222" name="achyut" date="2/4/23" time ="10:00 pm" billno="23"></Ordercard>
   <Ordercard price="1111" name="aditya" date="2/4/23" time ="9:00 am" billno="45"></Ordercard>
   <Ordercard price="99" name="wildan" date="2/4/23" time ="10:00 am" billno="56"></Ordercard>
   <Ordercard price="90" name="vamshi" date="2/4/23" time ="12:00 pm" billno="25"></Ordercard>
   <Ordercard price="12345" name="abijit" date="2/4/23" time ="1:00 pm" billno="07"></Ordercard>
</div>

</div>

}