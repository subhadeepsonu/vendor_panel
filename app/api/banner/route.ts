import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()
export async function GET(){
    try {
        const responce = await prisma.banner.findMany({
            where:{
                active:true
            }
        })
        return NextResponse.json({
            status:200,
            data:responce
        })
    } catch (error) {
        return NextResponse.json({
            status:404,
            data:"something went wrong"
        })
    }
}
// export async function POST(req:NextRequest){
    
//     try {
//         const data = await req.json()
//         const responce = await prisma.banner.create({
//             data:{
//                 active:data.active,
//                 imgurl:data.imgurl,
//                 targetscreen:data.

//             }
//         })
//     } catch (error) {
//         return NextResponse.json({
//             status:404,
//             data:"something went wrong"
//         })
//     }
// }
export async function PATCH(req:NextRequest) {
    try {
        const data = await req.json()
        const responce = await prisma.banner.update({
            where: {
                id: data.id
            },
            data: {
                active:data.active
            }
        })
    } catch (error) {
        return NextResponse.json({
            status:404,
            data:"something went wrong"
        })
    }  
}
export async function DELETE(req:NextRequest){
    try {
        const data = await req.json()
        const responce = await prisma.banner.delete({
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
            data:"something went wrong"
        })
    }
}