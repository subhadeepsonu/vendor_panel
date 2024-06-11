import prisma from '@/db'
import { NextRequest, NextResponse } from 'next/server'
export  async function GET(req:NextRequest){
    try {
        const data = await req.nextUrl.searchParams.get('brandId')
        const response = await prisma.order.aggregate({
            where:{
                brandId:parseInt(data!)
            },
            _sum:{
                totalAmount:true
            }
        })
        return NextResponse.json({
            status:200,
            data:response
        })
        
    } catch (error) {
        return NextResponse.json({
            status:200,
            message:"something went wrong"
        })
    }
}