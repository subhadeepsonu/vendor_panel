import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function POST(req:NextRequest){
    try {
        const data = await req.json()
        console.log("aha")
        const responce = await  prisma.admin.create({
            data:{
                password:data.password,
                phoneno:data.phoneno,
                username:data.username
            }
        })
        console.log("aha")
        return NextResponse.json({
            status:200,
            data:responce
        })
        
    } catch (error) {
        return NextResponse.json({
            staus:404,
            message:"something went wrong"
        })
    }
}
export async function PATCH(req:NextRequest){
    try {
        const data = await req.json()
        const responce = await prisma.admin.update({
            where:{
                username:data.oldusername                
            },
            data:{
                username:data.newusername,
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
export async function GET(){
    const responce = await prisma.admin.findMany({

    })
    return NextResponse.json({
        responce
    })
}