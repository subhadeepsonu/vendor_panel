"use server"
import { auth } from '@/auth'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function GetFeedback(){
    try {
        const data = await auth()
        const response = await prisma.feedback.findMany({
            where:{
                brandId:data?.user.brandId!
            },
            include:{
                user:{
                    include:{

                    }
                }
            }
        })
        return response
    } catch (error) {
        throw new Error(`error:${error}`)
    }
}