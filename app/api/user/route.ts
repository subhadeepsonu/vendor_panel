import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/db'
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
                id:body.id,
                email:body.email,
                name:body.name,
                image:body.image
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