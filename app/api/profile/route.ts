import { NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function POST(req:NextRequest){
    const data = await req.json()
    const responce = await prisma.brand
}