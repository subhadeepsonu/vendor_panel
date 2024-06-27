import { NextResponse } from "next/server";

export function GET(){
    try {
        return NextResponse.json({
            status:200,
            data:[
                {
                    id:1,
                    category:"BIRYANI",
                    imgurl:"https://sai.madhuram.xyz/wp-content/uploads/2024/06/Biryani-1.png"
                },
                {
                    id:2,
                    category:"CURRY",
                    imgurl:"https://sai.madhuram.xyz/wp-content/uploads/2024/06/curry.png"
                },
                {
                    id:3,
                    category:"BREADS",
                   imgurl:"https://sai.madhuram.xyz/wp-content/uploads/2024/06/sandwich.png"
                },
                {
                    id:4,
                    category:"CHINESE",
                    imgurl:"https://sai.madhuram.xyz/wp-content/uploads/2024/06/chienese.png"
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