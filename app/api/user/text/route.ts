import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export async function POST(req:NextRequest){
    try {
        const data = await req.json()
        const isOld = await prisma.user.findUnique({
            where:{
                email:data.email
            }
        })
        if(isOld){
            const isMatch = await bcrypt.compare(data.password,isOld.password!)
            if(isMatch){
                const token = jwt.sign(isOld,"secret")
                return NextResponse.json({
                    token
                })
            }
            else{
                return NextResponse.json({
                    value :"incorrect password"
                })
            }
        }
        else{
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(data.password,salt)
            const responce = await prisma.user.create({
                data:{
                     email:data.email,
                     password:hash,
                     name:data.name,
                     image:data.imgurl
                }
            })
            console.log(responce)
            const token =  jwt.sign(responce,"secret")
            const resp = jwt.verify(token,"secret")
            return NextResponse.json({
                token:token,
                data:resp
            })
        }
    } catch (error) {
        return NextResponse.json({
            error
        })
    }   
}