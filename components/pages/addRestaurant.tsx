"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { AddRestaurantSchema } from "../schema/schemas"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useState } from "react"
import { UploadButton } from "@/utils/uploadthing"
import Image from "next/image"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { AddRestaurantt } from "../actions/addRestaurant"
export default function AddRestaurant(){
    type AddRestaurantFormValues = z.infer<typeof AddRestaurantSchema>;
    const [imgurl,setimgurl]= useState("")
    const router = useRouter()
    const form = useForm<AddRestaurantFormValues>({
        resolver: zodResolver(AddRestaurantSchema) ,
        mode:"onChange",
        defaultValues:{
            address:"",
            name:""
        }
    })
    const onSubmit = async (data:any)=>{
        try {
            await AddRestaurantt(data.name,data.address,imgurl)
            form.reset()
            toast.success('Added successfully');
            router.replace('/menu')
          } catch (error) {
            toast.error('Failed to update order status');
          }
    }
    return <div className="h-screen w-full flex justify-center items-start">
        <div className="h-5/6 w-2/3 flex border-2 border-gray-300 rounded-md shadow-md ">
        <div className="h-full w-2/3 border-r-2 border-gray-200 ">
        <div className="h-5/6 w-full flex justify-center items-center">
            {imgurl.length ? (<Image className="border-2 border-gray-200" src={imgurl} alt="image" width={400} height={400} quality={50} ></Image> ) : null}
            
        </div>
            <UploadButton endpoint="imageUploader"
            onClientUploadComplete={(res) => {
                setimgurl(res[0].url);
                console.log("Files: ", res);
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            ></UploadButton>
            {!imgurl.length ? (<p className="flex justify-center items-center text-red-400"> Please upload image first</p>) : null}
        </div>
        <div className="h-full w-1/3 flex justify-center items-center">
        <div className="h-1/2 flex flex-col justify-around items-center">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
             <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Restaurant Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter address here" {...field}></Textarea>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={!imgurl.length} type="submit">Submit</Button>
                </form>
              </Form>
              </div>
        </div>
        </div>
    </div>
}