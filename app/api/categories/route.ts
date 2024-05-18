import { NextResponse } from "next/server";

export function GET(){
    try {
        return NextResponse.json({
            status:200,
            data:[
                {
                    id:1,
                    category:"Biryani",
                    imgurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Baguettes%2C_Paris%2C_France_-_panoramio.jpg/1920px-Baguettes%2C_Paris%2C_France_-_panoramio.jpg"
                },
                {
                    id:2,
                    category:"Curry",
                    imgurl:"https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_864,h_576,al_c,lg_1,q_85,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg"
                },
                {
                    id:3,
                    category:"Breads",
                   imgurl:"https://openthemagazine.com/wp-content/uploads/2015/11/frogfood1.jpg"
                },
                {
                    id:4,
                    category:"Chinese",
                    imgurl:"https://images.herzindagi.info/image/2020/Oct/chole-bhature-calories-one-plate.jpg"
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