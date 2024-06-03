import axios from "axios";
import { cookies } from "next/headers";
import { atom, selector } from "recoil";
// const brandId = cookies().get('brandId')
export const productList = atom({
    key:"productList",
    default: selector({
        key:'productListSelector',
        get: async ({get})=>{
            const response = await axios.get(`https://vendor-panel-delta.vercel.app/api/products`)
            return response.data
        }
    })
})
export const brand= atom({
    key:"brandAtom",
    default:0
})
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

// export const filteredList = atom({
//     key:"filteredlist",
//     default:selector({
//         key:"filteredListSelector",
//         get:({get})=>{
//             {
//                 const cat = get(categoryAtom)
//                 const data = get(orderList)
//                 if(cat === "all"){
//                     return data
//                 }else{
//                     return data.filter((product:any) => product.orderStatus===cat)
//                 }
//             }
//         }
//     })
// })

export const orderList =atom({
    key:"orderList",
    default:selector({
        key:'orderListSelector',
        get: async ({get})=>{
            const resp = await axios.get(`https://vendor-panel-delta.vercel.app/api/orders`)
            return resp.data
        }
    })
})
export const feedbackListSelector= selector({
    key:"feedbackListSelector",
    get:async ({get})=>{
        try {
            const response = await axios.get('https://vendor-panel-delta.vercel.app/api/feedback')
        return response.data.data
        } catch (error) {
            return null
        }
        
    }
})
export const feedbackList=atom({
    key:"feedbackList",
    default:feedbackListSelector
})
  