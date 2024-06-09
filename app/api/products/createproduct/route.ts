import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function PATCH(req:NextRequest){
    try {
        const data = await req.json()
        const responce = await prisma.product.update({
            where:{
                id:data.id
            },
            data:{
                category:data.category,
                price:data.price,
                productType:data.productype,
                salePrice:data.saleprice,
                brandId:data.brandid,
                isFeatured:data.isfeatured,
                imgurl:data.imgurl,
                name:data.name,
                nonVeg:data.nonveg,
                description:data.description,
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
    const responce = await prisma.product.deleteMany({
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