import prisma from '@/db'
import { NextRequest, NextResponse } from 'next/server'
export async function GET(req:NextRequest){
    try {
        const userId = await req.nextUrl.searchParams.get('id')
        const responce = await prisma.wishlist.findMany({
            where:{
                userId:userId!
            },
            include:{
                products:{
                    include:{
                        
                    }
                }
            }
        })
        return NextResponse.json({
            status:200,
            data:responce
        })
    } catch (error) {
        return NextResponse.json({
            status:404,
            message:"something went wrong"
        })
    }
}
export async function POST(req:NextRequest){
    try {
        const data = await req.json()
        const check = await prisma.wishlist.findMany({
            where:{
                productId:data.productid,
                userId:data.userid
            }
        })
        if(check.length!=0){
            return NextResponse.json({
                status:201,
                message:"already exists"

            })
        }
        else{
        const responce = await prisma.wishlist.create({
            data:{
                userId:data.userid,
                productId:data.productid
            }
        })
        return NextResponse.json({
            status:200,
            data:responce
        })}
    } catch (error) {
        return NextResponse.json({
            status:404,
            message:"something went wrong"
        })
    }
   

}