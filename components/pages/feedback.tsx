"use client"
import Loading from "@/app/feedbacks/loading";
import GetFeedback from "@/components/actions/getFeedback";
import FeedbackCard from "@/components/feedbackCard";
import { useQuery } from "@tanstack/react-query";
export default function Feedbacks(brandId:any){
    const {data,error,isLoading} = useQuery({
      queryKey:["feedback",brandId],
      queryFn:()=>GetFeedback()
    },
  )
  console.log(data)
  if(isLoading){
    return <Loading></Loading>
  }
    if(error){
      return <div className="h-screen flex justify-center items-center">Error: {error.message}</div>;
    }
    if(data){
      if(data.length===0){
        return <div className="h-screen flex justify-center items-center text-2xl font-bold">You currently have no Feedbacks 😟</div>
      }
      else{
        return <div className="flex justify-center items-start min-h-screen w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {data!.map((feedback:any,index:number)=>{
            return <FeedbackCard key={index} name={feedback.user.name} rating={feedback.rating} description={feedback.review}  ></FeedbackCard>
        })}
        </div>
    </div>
      }
    }  
}