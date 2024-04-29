import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()
export async function GET(){
    try {
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
// export async function POST(req:NextRequest){
//     try {
//         const data = await req.json()
//         const responce = await prisma.brand.create({
//             data:{
//                 name:data.name,
//                 imgurl:data.imgurl,


//             }
//         })
//         return NextResponse.json({
//             status:200,
//             data:responce
//         })
//     } catch (error) {
//         NextResponse.json({
//             status:404,
//             message:"something went wrong"
//         })
//     }
// }
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
            message:"something went wrong"
        })
    } catch (error) {
        NextResponse.json({
            status:404,
            message:"something went wrong"
        })
    }
}