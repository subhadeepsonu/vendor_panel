import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()
export async function POST(req:NextRequest){
    try {
        const data = await req.json()
        const responce = await prisma.orders.create({
            data:{
                address:data.address,
                totalamount:data.totalamount,
                userId:data.userId,
                products:data.products
            }
        })
        return NextResponse.json({
            status:200,
            data:responce
        })
    } catch (error) {
        return NextResponse.json({
            status:404,
            message:error
        })
    }
}