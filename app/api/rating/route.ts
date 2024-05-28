import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()

export  async function GET(req:NextRequest){
    try {
        const productid = await req.nextUrl.searchParams.get('productid')
        const limit = await req.nextUrl.searchParams.get('limit')
        if(productid){
        const responce =  await prisma.rating.aggregate({
            where:{
                productid:parseInt(productid!)

            },
            _avg:{
                rating:true
            }
        })
        return NextResponse.json({
            status:200,
            data:responce
        })
    }
    if(limit){
        const response = await prisma.rating.groupBy({
            by:['productid'],
            _avg:{
                rating:true
            },
            orderBy:{
                _avg:{
                    rating:'desc'
                }
            },
            take:parseInt(limit!)
        })
        return NextResponse.json({
            status:200,
            data:response
        })
    }
    const response = await prisma.rating.groupBy({
        by:['productid'],
        _avg:{
            rating:true
        },
        orderBy:{
            _avg:{
                rating:'desc'
            }
        },
    })
    return NextResponse.json({
        status:200,
        data:response
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
        console.log(data)
        const responce = await prisma.rating.create({
            data:{
               rating:data.rating,
               productid:data.productid,
               userid:data.userid
            }
        })
        console.log("haha")
        console.log(responce)
        return  NextResponse.json({
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