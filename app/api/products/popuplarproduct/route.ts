import prisma from '@/db'
import { NextResponse } from 'next/server'
export async function GET(){
    try {
        const responce = await prisma.product.findMany({
            take:10,
            orderBy:{
                price:'desc'
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