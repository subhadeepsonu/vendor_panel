import { NextResponse } from "next/server";

export function GET(){
    try {
        return NextResponse.json({
            status:200,
            data:[
                {
                    id:1,
                    category:"MilkShakes",
                    imgurl:"https://sai.madhuram.xyz/wp-content/uploads/2024/06/milk-shake.png"
                },
                {
                    id:2,
                    category:"Chicken",
                    imgurl:"https://sai.madhuram.xyz/wp-content/uploads/2024/06/Chicken-starter_-No-bg-min-1-1.png"
                },
                {
                    id:3,
                    category:"Ice Creams",
                   imgurl:"https://sai.madhuram.xyz/wp-content/uploads/2024/06/ice-cream.png"
                },
                {
                    id:4,
                    category:"Fries",
                    imgurl:"https://sai.madhuram.xyz/wp-content/uploads/2024/06/pasta.png"
                },
                // {
                //     id:5,
                //     category:"PaniPuri",
                //     imgurl:"https://images.herzindagi.info/image/2020/Oct/chole-bhature-calories-one-plate.jpg"
                // },
                {
                    id:6,
                    category:"Tiffins",
                    imgurl:"https://sai.madhuram.xyz/wp-content/uploads/2024/06/breakfast.png"
                },
                // {
                //     id:7,
                //     category:"IceCream",
                //     imgurl:"https://images.herzindagi.info/image/2020/Oct/chole-bhature-calories-one-plate.jpg"
                // },
                // {
                //     id:8,
                //     category:"MilkShakes",
                //     imgurl:"https://images.herzindagi.info/image/2020/Oct/chole-bhature-calories-one-plate.jpg"
                // },
                // {
                //     id:9,
                //     category:"Pasta",
                //     imgurl:"https://images.herzindagi.info/image/2020/Oct/chole-bhature-calories-one-plate.jpg"
                // },
                // {
                //     id:10,
                //     category:"Hot Beverages",
                //     imgurl:"https://images.herzindagi.info/image/2020/Oct/chole-bhature-calories-one-plate.jpg"
                // },
                // {
                //     id:11,
                //     category:"Momo's",
                //     imgurl:"https://images.herzindagi.info/image/2020/Oct/chole-bhature-calories-one-plate.jpg"
                // },
                // {
                //     id:12,
                //     category:"Sandwiche's",
                //     imgurl:"https://sai.madhuram.xyz/wp-content/uploads/2024/06/chicken-sandwich.png"
                // },
                // },
            ]
                
            
        })
    } catch (error) {
        return NextResponse.json({
            status:404,
            message:error
        })
    }   
}