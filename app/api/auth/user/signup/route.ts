import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()
export async function POST(req:NextRequest){
    try {
        const data = await req.json()
        console.log(data)
        const responce = await prisma.user.create({
            data:{
                email:data.email,
                name:data.name,
                password:data.password,
                phoneno:data.phoneno,
                imgurl:data.imgurl,
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
export async function GET(){
    return NextResponse.json({
        status:200
    })
}