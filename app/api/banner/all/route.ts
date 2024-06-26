import prisma from '@/db'
import { NextRequest, NextResponse } from 'next/server'
export async function GET(){
    try {
        const responce = await prisma.banner.findMany()
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