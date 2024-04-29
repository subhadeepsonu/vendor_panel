import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function POST(req:NextRequest){
    try {
        const data = await req.json()
        const responce = await prisma.user.findUnique({
            where:{
                email:data.email,
                password:data.password,
                
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