"use server"
import { auth } from '@/auth'
import prisma from '@/db'
export async function Addproduct(imgurl:string,name:string,price:number,salePrice:number,nonVeg:boolean
    ,category:any
){
    try {
        const session = await auth()
        const response = await prisma.product.create({
            data:{
                category:category,
                name:name,
                nonVeg:nonVeg,
                price:price,
                salePrice:salePrice,
                brandId:session?.user.brandId!,
                imgurl:imgurl,
                stock:0,
            }
        })
        return response
    } catch (error) {
        throw new Error(`error:${error}`)
    }
}