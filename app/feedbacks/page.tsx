"use client"
import FeedbackCard from "@/components/feedbackCard";
import { feedbackList } from "@/store/atoms/checkatom";
import { useRecoilValue } from "recoil";

export default function Feedbacks(){
    const feedbacks = useRecoilValue(feedbackList)
    return <div className="flex justify-center items-start min-h-screen w-full">
        <div className="grid grid-cols-3 gap-5">
        {feedbacks.map((feedback:any,index:number)=>{
            return <FeedbackCard key={index} name={feedback.user.name} rating={feedback.rating} description={feedback.review}  ></FeedbackCard>
        })}
        </div>
    </div>
}
Feedbacks.displayName = 'Feedbacks';