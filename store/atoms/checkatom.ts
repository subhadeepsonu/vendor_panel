import axios from "axios";
import { atom, selector } from "recoil";

export const checkOrderAtom= atom({
    key:"checkorderAtom",
    default:0
})
export const checkProductAtom =atom({
    key:"checkProductAtom",
    default:0
})
export const productListSelector = selector({
    key:"productListSelector",
        get: async ({get})=>{
            get(checkProductAtom)
            const response = await axios.get('https://vendor-panel-iota.vercel.app/api/products')
            return response.data.data
        }
})
export const productList = atom({
    key:"productList",
    default: productListSelector
})
export const orderListSelector=selector({
    key:"orderListSelector",
    get:async ({get})=>{
        get(checkOrderAtom)
        const response = await axios.get('https://vendor-panel-iota.vercel.app/api/orders')
        return response.data.data
    }
})
export const orderList =atom({
    key:"orderList",
    default:orderListSelector
})
export const feedbackListSelector= selector({
    key:"feedbackListSelector",
    get:async ({get})=>{
        const response = await axios.get('https://vendor-panel-iota.vercel.app/api/feedback')
        return response.data.data
    }
})
export const feedbackList=atom({
    key:"feedbackList",
    default:feedbackListSelector
})