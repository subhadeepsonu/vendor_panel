
import Ordercard from "@/components/ordercard";


export default function Orders(){
    return <div className=" flex justify-center items-start w-full min-h-screen ">
     <div className="grid grid-cols-3 gap-5">
        <Ordercard orderstatus="ready"></Ordercard>
        <Ordercard orderstatus="ready"></Ordercard>
        <Ordercard orderstatus="ready"></Ordercard>
        <Ordercard orderstatus="ready"></Ordercard>
        <Ordercard orderstatus="cooking"></Ordercard>
        <Ordercard orderstatus="cooking"></Ordercard>
        <Ordercard orderstatus="delivered"></Ordercard>
    </div>
    </div>

}