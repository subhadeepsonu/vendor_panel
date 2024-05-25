import axios from "axios";
import { atom, selector } from "recoil";
export const categoryAtom = atom({
    key:"categoryAtom",
    default:"all"
})
export const userAtom =atom({
    key:"userAtom",
    default:''
})
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
            const response = await axios.get('http://localhost:3000/api/products?brandid='+brandAtom)
            return response.data.data
        }
})

export const productList = atom({
    key:"productList",
    default: productListSelector
})
export const filteredList = atom({
    key:"filteredlist",
    default:selector({
        key:"filteredListSelector",
        get:({get})=>{
            {
                const cat = get(categoryAtom)
                const data = get(orderList)
                if(cat === "all"){
                    return data
                }else{
                    return data.filter((product:any) => product.orderStatus===cat)
                }
            }
        }
    })
})
export const orderListSelector=selector({
    key:"orderListSelector",
    get:async ({get})=>{
        get(checkOrderAtom)
        const response = await axios.get('http://localhost:3000/api/orders?brandid='+brandAtom)
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
        const response = await axios.get('http://localhost:3000/api/feedback')
        return response.data.data
    }
})
export const feedbackList=atom({
    key:"feedbackList",
    default:feedbackListSelector
})
export const brandAtom=atom({
    key:"brand",
    default:selector({
        key:"",
        get:async ({get})=>{
            get(userAtom)
            const data = await axios.get('http://localhost:3000/api/restaurant?name='+userAtom)
            return data.data.id
        }
    })
})