import { NextResponse } from "next/server";

export function POST(){

    try {
        return NextResponse.json({
            status:200,
            data:[
                {
                    id:1,
                    category:"Biryani"
                },
                {
                    id:2,
                    category:"Curry"
                },
                {
                    id:3,
                    category:"Breads"
                },
                {
                    id:4,
                    category:"Chinese"
                },
            ]
                
            
        })
    } catch (error) {
        return NextResponse.json({
            status:404,
            message:error
        })
    }
    
}