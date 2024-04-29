import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function POST(req:NextRequest){
    try {
    const data = await req.json()
    const responce = await prisma.brand.findMany({
        where:{
            id:data.id,
        },
        include:{
            _count:{
                select:{
                    products:true
                }
            }
        }
    })
    return NextResponse.json({
        responce
    })
    } catch (error) {
        
    }
    

}