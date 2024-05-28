import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()
export async function GET(req:NextRequest){
    try {
        const data = await req.nextUrl.searchParams.get('name')
        if(data){
            const response = await prisma.brand.findUnique({
                where:{
                    adminname:data
                }
            })
            return NextResponse.json({
                status:200,
                ha:data,
                data:response
            })
        }
        const responce = await prisma.brand.findMany()
        return NextResponse.json({
            status:200,
            
            data:responce
        })
    } catch (error) {
        NextResponse.json({
            status:404,
            message:"something went wrong"
        })
    }
}
export async function POST(req:NextRequest){
    try {
        console.log("haha")
        const data = await req.json()   
        console.log(data)     
        const responce = await prisma.brand.create({
            data:{
                name:data.name,
                adminname:data.adminname
            }
        });
        console.log(responce)
        return NextResponse.json({
            status:200,
            data:responce
        })
    } catch (error) {
        NextResponse.json({
            status:404,
            message:error
        })
    }
}

export async function PATCH(req:NextRequest){
    try {
        const data = await req.json()
        const responce = await prisma.brand.update({
            where:{
                id:data.id
            },
            data:{
                imgurl:data.imgurl,
                isfeatured:data.isfeatured,
                isopen:data.isopen,
                name:data.name,
                
            }
        })
        return NextResponse.json({
            status:200,
            data:responce
        })
    } catch (error) {
        NextResponse.json({
            status:404,
            message:"something went wrong"
        })
    }
}
export async function DELETE(req:NextRequest){
    try {
        const data = await req.json()
        const responce = await prisma.brand.delete({
            where:{
                id:data.id
            }
        })
        return NextResponse.json({
            status:200,
            message:responce
        })
    } catch (error) {
        NextResponse.json({
            status:404,
            message:"something went wrong"
        })
    }
}