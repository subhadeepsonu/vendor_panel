import { atom, selector } from "recoil";
import { any } from "zod";
export const productNameAtom = atom({
    key:"productNameAtom",
    default:""
})
export const productListAtom = atom({
    key:"productListAtom",
    default:[]
})
export const filterProductListAtom = atom({
    key:"filterProductListAtom",
    default:selector({
        key:"productListSelector",
        get:({get})=>{
            const pNameAtom= get(productNameAtom)
            const data:any = get(productListAtom)
            if(pNameAtom===""){
                return data
            }
            return data.filter((product: {name: string})=>product.name.toLowerCase().startsWith(pNameAtom.toLowerCase()))
        }
    })
})
export const category = atom({
    key:"categoryAtom",
    default:"all"
})
export const orderIdAtom = atom({
    key:"orderIdAtom",
    default:""
})
export const orderListAtom = atom({
    key:"orderListAtom",
    default:[]
})

export const filterOrderListAtom = selector({
    key: 'filterOrderListAtom',
    get: ({ get }) => {
      const cat = get(category);
      const orderId = get(orderIdAtom);
      const data = get(orderListAtom);
  
      if (cat === 'all') {
        if (orderId === '') {
          return data; 
        } else {
          return data.filter((order: any)   => order.orderId == orderId); 
        }
      } else {
        if (orderId === '') {
          return data.filter((order: any) => order.orderStatus === cat); 
        } else {
          return data.filter((order: any) => order.orderStatus === cat && order.orderId == orderId);
        }
      }
    }
  });