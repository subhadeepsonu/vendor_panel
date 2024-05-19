import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()
export  async function GET(){
    try {
        const responce = await prisma.user.findMany({
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
export  async function POST(req:NextRequest){
    try {
        const body = await req.json()
        const responce = await  prisma.user.create({
            data:{
                email:body.email,
                name:body.name,
                imgurl:body.imgurl
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