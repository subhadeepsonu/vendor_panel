"use client"
import { UploadButton } from "@/utils/uploadthing"
import { useState } from "react"
import Image from "next/image"
export default function (){
  const [imgurl,setimgurl] = useState("")
  return <div className="h-screen w-full flex-col flex justify-center items-center">
    {imgurl.length ? (
       <Image src={imgurl} alt="image" width={500} height={500}></Image>
    ) :null}
    <UploadButton endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        setimgurl(res[0].url)
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
    ></UploadButton>
  </div>
}