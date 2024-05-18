import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()
export default async function Get(){
    try {
        const responce = prisma.user.findMany({

        })
        return NextResponse.json({
            status:200,
            message:responce
        })
    } catch (error) {
        return NextResponse.json({
            status:404,
            message:"something went wrong"
        })
    }

}