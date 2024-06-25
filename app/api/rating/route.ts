import prisma from '@/db'
import { NextRequest, NextResponse } from 'next/server'

export  async function GET(req:NextRequest){
    try {
        const productid = await req.nextUrl.searchParams.get('productid')
        const limit = await req.nextUrl.searchParams.get('limit')
        if(productid){
        const responce =  await prisma.rating.aggregate({
            where:{
                productId:parseInt(productid!)

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
            by:['productId'],
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
        by:['productId'],
        _avg:{
            rating:true
        },
        orderBy:{
            productId:"desc"
        },
    })
    const resp = await prisma.product.findMany({
        where:{
            ratings:{
                some:{

                }
            }
        },
        orderBy:{
            id:"desc"
        }
    })
    const withrating=resp.map((prod:any,index:number)=>({
        ...prod,
        rating:response[index]._avg
    }))
    const sorted = withrating.sort((a,b)=> b.rating.rating-a.rating.rating)
    return NextResponse.json({
        status:200,
        data:sorted
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
               productId:data.productid,
               userId:data.userid
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