import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()
export async function GET(req:NextRequest){
    try {
        const userId = await req.nextUrl.searchParams.get('id')
        const responce = await prisma.wishlist.findMany({
            where:{
                userId:parseInt(userId!)
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
                productId:data.productid
            }
        })
        if(check){
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