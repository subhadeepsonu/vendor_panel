import prisma from '@/db'
import { NextRequest, NextResponse } from 'next/server'
export async function GET(req:NextRequest){
    try {
        const brandId = await req.nextUrl.searchParams.get('brandId')
        const uni = await req.nextUrl.searchParams.get('uniname')
        if(uni){
            const responce = await prisma.brand.findMany({
                where:{
                    
                }
            })
            return NextResponse.json({
                status:200,
                data: responce
            })
        }
        if(brandId){
            const response = await prisma.brand.findFirst({
                where:{
                    id: parseInt(brandId)
                }
            })
            return NextResponse.json({
                status:200,
                ha:brandId,
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
                isFeatured:data.isfeatured,
                isOpen:data.isopen,
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
