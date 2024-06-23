import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/db'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken' 
import bcrypt from "bcrypt"
export  async function GET(){
    try {
        const responce = await prisma.user.findMany({
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
export  async function POST(req:NextRequest){
    try {
        const body = await req.json()
        const responce = await  prisma.user.create({
            data:{
                id:body.id,
                email:body.email,
                name:body.name,
                image:body.image
            }
        })
        const token = jwt.sign(responce,"secrest")
        cookies().set("token",token)
        return NextResponse.json({
            status:200,
            data:token
        })
    } catch (error) {
        return NextResponse.json({
            status:404,
            message:"something went wrong"
        })
    }
}
export async function PATCH(req:NextRequest){
    try {
        const data = await req.json()
        const salt = await bcrypt.genSalt(10)
        const value = await bcrypt.hash(data.pass,salt)
        const ismatch = await bcrypt.compare("pass",value)

        return NextResponse.json({
            value,
            salt,
            ismatch
        })
    } catch (error) {
        
        return NextResponse.json({
            error
        })
    }
}
