import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
 export async function GET(){
    try {
        const responce = await prisma.products.findMany({
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
export async function POST(req:NextRequest){
    try {
        const data = await req.json()
        const responce = await prisma.products.create({
           data:{
            category:data.category,
            price:data.price,
            productype:data.productype,
            saleprice:data.saleprice,
            brandid:data.brandid,
            isfeatured:false,
            imgurl:data.imgurl
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
export async function PATCH(req:NextRequest){
    try {
        const data = await req.json()
        const responce = await prisma.products.update({
            where:{
                id:data.id
            },
            data:{
                category:data.category,
                price:data.price,
                productype:data.productype,
                saleprice:data.saleprice,
                brandid:data.brandid,
                isfeatured:data.isfeatured,
                imgurl:data.imgurl,
                stock:data.stock
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
export async function DELETE(req:NextRequest){
    try {
    const data = await req.json()
    const responce = await prisma.products.delete({
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
            message:"something went wrong"
        })
    }
}