import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()
export  async function GET(req:NextRequest){
    try {
        const data = await req.nextUrl.searchParams.get('brandId')
        const response = await prisma.orders.aggregate({
            where:{
                brandId:parseInt(data!)
            },
            _sum:{
                totalamount:true
            }
        })
        return NextResponse.json({
            status:200,
            data:response
        })
        
    } catch (error) {
        NextResponse.json({
            status:200,
            message:"something went wrong"
        })
    }
}