import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function GET(){
    try {
        const responce = prisma.user.findMany({})
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

export async function POST(req:NextRequest){
    try {
        const data = await req.json()
        const responce = await prisma.user.findUnique({
            where:{
                name:data.name
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
export async function PATCH(req:NextRequest){
    try {
        const data = await req.json()
        const responce = await prisma.user.update({
            where:{
                id:data.id
            },
            data:{
                email:data.email,
                imgurl:data.imgurl,
                name:data.name,
                phoneno:data.phoneno,
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
            message:error
        })
        
    }

}
export async function DELETE(req:NextRequest){
    try { 
        const data = await req.json()
        const responce = await prisma.user.delete({
            where:{
                id:data.id
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