import axios from "axios";
import { atom, selector } from "recoil";
export const productList = atom({
    key:"productList",
    default: selector({
        key:'productListSelector',
        get: async ({get})=>{
            get(checkProductAtom)
            const response = await axios.get(`https://vendor-panel-delta.vercel.app/api/products`)
            return response.data
        }
    })
})
export const brand= atom({
    key:"brandAtom",
    default:0
})

export const checkOrderAtom= atom({
    key:"checkorderAtom",
    default:0
})
export const checkProductAtom =atom({
    key:"checkProductAtom",
    default:0
})
export const categoryAtom = atom({
    key:"categoryAtom",
    default:"all"
})
export const filteredList = atom({
    key:"filteredlist",
    default:selector({
        key:"filteredListSelector",
        get:({get})=>{
            {
                let cat = get(categoryAtom)
                let data = get(orderList)
                if(cat === "all"){
                    return data.data
                }else{
                    return data.data.filter((product:any) => product.orderStatus===cat)
                }
            }
        }
    })
})
export const orderList = selector({
    key: 'orderListSelector',
    get: async ({get}) => {
        get(checkOrderAtom)
      const resp = await axios.get(`https://vendor-panel-delta.vercel.app/api/orders`);
      return resp.data;
    },
  });
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
  