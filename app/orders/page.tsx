
import Ordercard from "@/components/ordercard";


export default function Orders(){
    return <div className=" flex justify-center items-center w-full ">
     <div className="grid grid-cols-3 gap-5">
        <Ordercard></Ordercard>
        <Ordercard></Ordercard>
        <Ordercard></Ordercard>
        <Ordercard></Ordercard>
        <Ordercard></Ordercard>
        <Ordercard></Ordercard>
        <Ordercard></Ordercard>
    </div>
    </div>

}