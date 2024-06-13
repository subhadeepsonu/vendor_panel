import axios from "axios";
import { atom, selector } from "recoil";
import { any } from "zod";
export const category = atom({
    key:"categoryAtom",
    default:""
})
export  const filterOrderListAtom = atom({
    key:"filterOrderListAtom",
    default:selector({
        key:"orderListSelector",
        get:({get})=>{
            const cat = get(category)
            const data:any = get(orderListAtom)
            if(cat=="all"){
                return data
            }
            return data.filter((order: { orderStatus: string }) =>order.orderStatus ==cat)
        }
    })
})
export const orderListAtom = atom({
    key:"orderListAtom",
    default:[]
})