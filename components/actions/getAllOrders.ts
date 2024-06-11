"use server"
import prisma from '@/db'
export default async function GetAllOrders(id:number){
    try {
        const response = await prisma.order.findMany({
            where:{
                brandId:id
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