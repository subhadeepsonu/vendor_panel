'use server'
import prisma from '@/db'
export async function updateStock(stock:number,id:number){
    try {
        const response = await  prisma.product.update({
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