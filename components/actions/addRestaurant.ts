"use server"
import { auth } from '@/auth'
import {  PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function AddRestaurantt(name:string,address:string,imgurl:string){
    try {
        const session = await auth()
        const response = await prisma.brand.create({
            data:{
                name:name,
                address:address,
                imgurl:imgurl,
            },
        })
        const resp = await prisma.user.update({
            where:{
                email:session?.user.email!
            },
            data:{
                brandId:response.id
            }
        })
        return resp
    } catch (error) {
        throw new Error(`error:${error}`)
    }
}