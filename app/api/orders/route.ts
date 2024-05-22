import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()
export async function GET(req:NextRequest){
    try {
        const status:any = await req.nextUrl.searchParams.get('status')
        const orderId = await req.nextUrl.searchParams.get('id')
        if(orderId){
            const responce =  await prisma.orders.findMany({
                
                where:{
                    orderid:parseInt(orderId)
                },
                include:{
                    orderproduct:{
                        include:{
                            product:{
                                
                            }
                        }
                    }
                }
            },
            
        )
            return NextResponse.json({
                status:200,
                data:responce,
                
            })

        }
        else if(status){
                const responce =  await prisma.orders.findMany({
                    where:{
                        orderStatus:status!
                    },
                    include:{
                        orderproduct:{
                            include:{
                                product:{
                                    
                                }
                            }
                        }
                    }
                },
            )
            return NextResponse.json({
                status:200,
                data:responce
            })
            
        }
        else{
        const responce =  await prisma.orders.findMany({
            orderBy:[
                {
                    orderid:'asc'
                }
            ],
            include:{
                orderproduct:{
                    include:{
                        product:{
                            
                        }
                    }
                }
            }
        },
        
    )
        return NextResponse.json({
            status:200,
            data:responce
        })
    }
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
        const responce = await prisma.orders.create({
            data:{
                address:data.address,
                totalamount:data.totalamount,
                userId:data.userId,
                orderproduct:{
                    create:data.products.map((items:{productId:number,quantity:number})=>({
                        quantity: items.quantity,
                        product: {
                            connect: { id: items.productId }
                        }
                    }))
                }
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
        const responce = await prisma.orders.update({
            where:{
                orderid:data.orderid
            },
            data:{
                orderStatus:data.status
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