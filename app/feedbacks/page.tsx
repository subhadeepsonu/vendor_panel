"use client"
import FeedbackCard from "@/components/feedbackCard";
import { feedbackList } from "@/store/atoms/checkatom";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

export default function Feedbacks(){
    const { data, status } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (status === "unauthenticated") {
          router.push('/api/auth/signin');
        }
      }, [status, router]);
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