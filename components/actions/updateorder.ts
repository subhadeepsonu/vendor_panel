'use server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async  function updateOrder(status:any,id:number){
    try {
        const resp = await prisma.orders.update({
            where:{
                orderid:id
            },data:{
                orderStatus:status
            }
        })
        return resp
        
    } catch (error:any) {
        throw new error(error)
    }
    


}