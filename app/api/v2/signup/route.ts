import { NextRequest, NextResponse } from "next/server";
import z from "zod"
import bcrypt from "bcrypt"
import { signupSchema } from "./schema";
import jwt from "jsonwebtoken"
import prisma from "@/db";
export async function POST(req:NextRequest){
    try {
        const data: z.infer<typeof signupSchema> = await req.json()
        const check = signupSchema.safeParse(data)
        if(!check.success){
            return NextResponse.json({
                success:false,
                message:"Inavlid Input"
            })
        }
        const isOld = await prisma.user.findUnique({
            where:{
                email:data.email
            }
        })
        if(isOld){
            return NextResponse.json({
                success:false,
                message:"User already exists"
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(data.password,salt)
        const response = await prisma.user.create({
            data:{
                name:data.name,
                email:data.email,
                password:hashed
            }
        })
        const token = jwt.sign(response,"haha")
        return NextResponse.json({
            success:true,
            message:response,
            token:token
        })
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:`${error}`
        })
    }
}