'use server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function updateStock(stock:number,id:number){
    try {
        const response = await  prisma.products.update({
            where:{
                id:id
            },
            data:{
                stock:stock
            }
        })
        return response
    } catch (error:any) {
        throw new error(error)
    }
}