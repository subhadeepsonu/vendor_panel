import { NextRequest, NextResponse } from "next/server";
import { loginSchema } from "./schema";
import bcrypt from "bcrypt"
import prisma from "@/db";
import z from "zod"
import jwt from "jsonwebtoken"
export async function POST(req:NextRequest){
    try {
        const data:z.infer<typeof loginSchema>  = await req.json()
        const check = loginSchema.safeParse(data)
        if(!check.success){
            return NextResponse.json({
                success:false,
                message:"Invalid input"
            })
        }
        const isOld = await prisma.user.findUnique({
            where:{
                email:data.email
            }
        })
        if(isOld){
            const passcheck = await bcrypt.compare(data.password,isOld.password!)
            if(passcheck){
                const token = jwt.sign(isOld,"haha")
                return NextResponse.json({
                    success:true,
                    message:token
                })
            }
            else{
                return NextResponse.json({
                    success:false,
                    message:"Incorrect password"
                })
            }
        }else{
            return NextResponse.json({
                success:false,
                message:"User does not exist"
            })
        }
        
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:`${error}`
        })
    }
}