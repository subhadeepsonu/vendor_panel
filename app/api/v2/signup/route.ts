import { NextRequest, NextResponse } from "next/server";
import z from "zod"
import { signupSchema } from "./schema";
export async function POST(req:NextRequest){
    try {
        const data = req.json()
        const check = signupSchema.safeParse(data)
        if(!check.success){
            return NextResponse.json({
                success:false,
                message:"Inavlid Input"
            })
        }
        
    } catch (error) {
        
    }
}