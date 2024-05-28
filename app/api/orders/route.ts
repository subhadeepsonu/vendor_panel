import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()
export async function GET(req:NextRequest){
    try {
        const status:any = await req.nextUrl.searchParams.get('status')
        const orderId = await req.nextUrl.searchParams.get('id')
        const brandId = await req.nextUrl.searchParams.get('brandId')
        if(brandId){
            const response = await prisma.orders.findMany({
                where:{
                    brandId:parseInt(brandId)
                },
                include:{
                    orderproduct:{
                        include:{
                            product:{
                                
                            }
                        }
                    }
                }
            })
            return NextResponse.json({
                status:200,
                h:"h",
                data:response
            })
        }
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
                    orderid:'desc'
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

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        if (!data || !data.brandId || !data.address || !data.totalamount || !data.userId || !data.products) {
            return NextResponse.json({
                status: 400,
                message: "Invalid request data"
            });
        }

        const check = await prisma.brand.findUnique({
            where: {
                id: data.brandId
            }
        });

        if (check?.isfeatured) {
            const response = await prisma.orders.create({
                data: {
                    address: data.address,
                    totalamount: data.totalamount,
                    userId: data.userId,
                    brandId: data.brandId,
                    orderproduct: {
                        create: data.products.map((item: { productId: number, quantity: number }) => ({
                            quantity: item.quantity,
                            product: {
                                connect: { id: item.productId }
                            }
                        }))
                    }
                }
            });

            return NextResponse.json({
                status: 200,
                data: response
            });
        } else {
            return NextResponse.json({
                status: 200,
                message: "Shop is closed"
            });
        }
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: error || "Internal Server Error"
        });
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