import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req:NextRequest){
    try {
        const data = await req.json()
        const response = await  prisma.user.update({
            where:{
                id:data.id
            },
            data:{
                address:data.address
            }
        })
        return NextResponse.json({
            status:200,
            data:response
        })
        
    } catch (error) {
        return NextResponse.json({
            status:404,
            data:`${error}`
        })
    }

}