import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
 export async function GET(req:NextRequest){
    try {
        const {category} = await req.json()
        const responce = await prisma.products.findMany(
            {
                where :{
                    category:category
                }
            }
        )
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