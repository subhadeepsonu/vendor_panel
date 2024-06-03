import { NextResponse } from "next/server";

export function GET(){
    try {
        return NextResponse.json({
            status:200,
            data:[
                {
                    id:1,
                    category:"Biryani",
                    imgurl:"https://sai.madhuram.xyz/wp-content/uploads/2024/06/biriyani_No-bg-e1717429298886.png"
                },
                {
                    id:2,
                    category:"Tiffins",
                    imgurl:"https://sai.madhuram.xyz/wp-content/uploads/2024/06/dosa_No-bg-e1717429795370.png"
                },
                {
                    id:3,
                    category:"Starters",
                   imgurl:"https://sai.madhuram.xyz/wp-content/uploads/2024/06/Chicken-starter_-No-bg-e1717429367221.png"
                },
                {
                    id:4,
                    category:"Chinese",
                    imgurl:"https://sai.madhuram.xyz/wp-content/uploads/2024/06/Noodels-No-bg-e1717429885762.png"
                },
                // {
                //     id:5,
                //     category:"PaniPuri",
                //     imgurl:"https://images.herzindagi.info/image/2020/Oct/chole-bhature-calories-one-plate.jpg"
                // },
                // {
                //     id:6,
                //     category:"Sweets",
                //     imgurl:"https://images.herzindagi.info/image/2020/Oct/chole-bhature-calories-one-plate.jpg"
                // },
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
                //     imgurl:"https://images.herzindagi.info/image/2020/Oct/chole-bhature-calories-one-plate.jpg"
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