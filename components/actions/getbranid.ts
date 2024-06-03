"use server"
import { cookies } from 'next/headers'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function Getproducts(){
    const data:any = await cookies().get('brandId')
    try {
        const resp = await  prisma.products.findMany({
            where:{
                brandid:parseInt(data!)
            }
        })
        return resp
    } catch (error) {
        
    }
    
    
}