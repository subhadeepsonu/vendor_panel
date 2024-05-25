'use client'

import { Fade } from "react-awesome-reveal"

export default function FeedbackCard(props:any){
    return <Fade duration={500}>
    <div className="h-40 w-96  rounded-sm shadow-sm border-2 border-gray-100 flex flex-col justify-between items-center ">
        <div className="flex h-1/3 justify-between w-full items-center px-4 font-bold">
            <div>
            {props.name}
            </div>
            <div>
                {props.rating}⭐
            </div>
        </div>
        <div className="text-clip overflow-hidden h-2/3 w-full flex justify-start items-center text-center pl-2 text-sm  font-light">
        {props.description}
        </div>
        
    </div>
    </Fade>
}