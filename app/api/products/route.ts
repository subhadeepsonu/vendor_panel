import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()
 export async function GET(req:NextRequest){
    try {
        const productId = req.nextUrl.searchParams.get('id')
        const BrandId = req.nextUrl.searchParams.get('brandid')
        const Category:any = req.nextUrl.searchParams.get('category')
        if(productId){
            try {
                const responce = await prisma.products.findMany({
                    where:{
                        id:parseInt(productId)
                    }
                })
                return NextResponse.json({
                    status:200,
                    data:responce
                })
            
            } catch (error) {
                return NextResponse.json({
                    status:404,
                    "message":"something went wrong"
                })
            }
        }
        else if(BrandId&&Category){
            try {
                const responce = await prisma.products.findMany({
                    where:{
                        brandid:parseInt(BrandId),
                        category:Category
                    }
                }) 
                return NextResponse.json({
                    status:200,
                    data:responce
                })
            } catch (error) {
                return NextResponse.json({
                    status:404,
                    "message":"something went wrong"
                })
            }

        }
        else if(BrandId){
            try {
                const responce = await prisma.products.findMany({
                    where:{
                        brandid:parseInt(BrandId)
                    }
                })
                return NextResponse.json({
                    status:200,
                    data:responce
                })
                
            } catch (error) {
                return NextResponse.json({
                    status:404,
                    "message":"something went wrong"
                })
            }

        }
        else if(Category){
            try {
                const responce = await prisma.products.findMany({
                    where:{
                        brandid:parseInt(Category)
                    }
                })
                return NextResponse.json({
                    status:200,
                    data:responce
                })
                
            } catch (error) {
                return NextResponse.json({
                    status:404,
                    "message":"something went wrong"
                })
            }

        }
        else{
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
                "message":"something went wrong"
            })
           }
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
        console.log("haha")
        const data = await req.json()
        console.log("hehe")
        console.log(data)
        const responce = await prisma.products.create({
           data:{
                category:data.category,
                price:data.price,
                productype:data.productype,
                saleprice:data.saleprice,
                brandid:data.brandid,
                isfeatured:false,
                imgurl:data.imgurl,
                name:data.name,
                nonveg:data.nonveg,
                description:data.description
           }
        })
        return NextResponse.json({
            status:200,
            data:responce
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            status:404,
            message:"something went wrong"
        })
    }
}
export async function DELETE(){
    try {
        
        const res = await prisma.products.deleteMany()
        return NextResponse.json({
            "message":"succes"
        })
    } catch (error) {
        
    }
}