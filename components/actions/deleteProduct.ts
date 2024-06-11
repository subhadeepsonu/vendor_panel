"use server"
import prisma from "@/db";
export async function DeleteProduct(id:number){
    try {
        const response = await prisma.product.delete({
            where:{
                id:id
            }
        })
        return response
    } catch (error) {
        throw  new Error(`error:${error}`)
    }
}