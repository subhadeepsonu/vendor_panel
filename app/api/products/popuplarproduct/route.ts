import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
const prisma = new PrismaClient()
export async function GET(){
    try {
        const responce = await prisma.products.findMany({
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