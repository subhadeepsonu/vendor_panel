import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()
export async function POST(req:NextRequest){
    try {
        const data = await req.json()
        const responce = await prisma.products.findMany({
            where:{
                brandid:data.brandid,
                category:data.category
            }
        })
        return NextResponse.json({
            status:200,
            data:responce
        })
        
    } catch (error) {
        return NextResponse.json({
            status:200,
            message:error
        })
    }
}