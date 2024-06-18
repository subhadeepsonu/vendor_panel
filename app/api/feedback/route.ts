import prisma from '@/db'
import { NextRequest, NextResponse } from 'next/server'
export async function GET(req:NextRequest){
    
    try {
        const orderId = await req.nextUrl.searchParams.get('orderId')
        const userId = await req.nextUrl.searchParams.get('userId')
        if(orderId){
        const responce = await prisma.feedback.findMany({
            where:{
                orderId:parseInt(orderId)
            }
        })
        return NextResponse.json({
            status:200,
            data:responce
        })
        }
        else if(userId){
            const responce = await prisma.feedback.findMany({
                where:{
                    userId:userId
                }
            })
            return NextResponse.json({
                status:200,
                data:responce
            })
        }
        else{
            const responce = await prisma.feedback.findMany({
                include:{
                    user:{
                        select:{
                            name:true
                        }
                    }
                }
            })
            return NextResponse.json({
                status:200,
                data:responce
            })
        }
       
    } catch (error) {
        return  NextResponse.json({
            status:404,
            message:"something went wrong"
        })
        
    }
}
export async function POST(req:NextRequest){
    try {
        const data = await req.json()
        console.log(data)
        const responce = await prisma.feedback.create({
            data:{
                rating:data.rating,
                review:data.review,
                orderId:data.orderId,
                userId:data.userId
            }
        })
        console.log("haha")
        return NextResponse.json({
            status:200,
            data:responce
        })
    } catch (error) {
        return  NextResponse.json({
            status:404,
            message:"something went wrong"
        })
    }
    
}