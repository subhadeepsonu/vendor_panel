"use server"
import { auth } from '@/auth'
import prisma from '@/db'
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