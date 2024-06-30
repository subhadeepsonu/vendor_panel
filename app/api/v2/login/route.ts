import { NextRequest, NextResponse } from "next/server";
import { loginSchema } from "./schema";
import bcrypt from "bcrypt"
export async function POST(req:NextRequest){
    try {
        const data = await req.json()
        const check = loginSchema.safeParse(data)
        if(!check.success){
            return NextResponse.json({
                success:false,
                message:"Invalid input"
            })
        }
        const salt = await bcrypt.genSalt(10)
        
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:`${error}`
        })
    }
}