import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
 export async function POST(req:NextRequest){
    try {
        const data = await req.json()
        
        console.log(data)
        const responce = await prisma.products.findMany(
            {
                where :{
                    category:data.category
                }
            }
        )
        return NextResponse.json({
            status:200,
            data:responce  
        })
    } catch (error:any) {
        return NextResponse.json({
            status:404,
            message:error.message
        })
    }
}