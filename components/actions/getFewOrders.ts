"use server"
import { auth } from '@/auth'
import prisma from '@/db'
export default async function GetFewOrders(){
    try {
        const data = await auth()
        const response = await prisma.order.findMany({
           take:3,
           where:{
            brandId:data?.user.brandId!
           },
            orderBy:{
                orderId:"desc"
            },
          include:{
            orderProducts:{
                include:{
                    product:{
                        
                    }
                }
            }
          }
        },
    
    )
        return response
    } catch (error) {
        throw new Error(`error:${error}`)
    }
}