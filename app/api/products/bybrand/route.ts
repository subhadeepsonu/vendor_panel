import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function POST(req:NextRequest){
    try {
        const data = await req.json()
        const brandid = parseInt(data.brandid)
        const responce = await prisma.products.findMany({
            where:{
                brandid:brandid
            }
        })
        return NextResponse.json({
            status :200,
            data:responce
        })
    }catch (error) {
        return NextResponse.json({
            status:404,
            message:"something went wrong"
        })
    }
}