"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { AddRestaurantSchema } from "../schema/schemas"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useState } from "react"
import { UploadButton } from "@/utils/uploadthing"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { toast } from "sonner"
import { redirect, useRouter } from "next/navigation"
import { AddRestaurantt } from "../actions/addRestaurant"
import {  useMutation, useQueryClient } from "@tanstack/react-query"
import { useRecoilValue } from "recoil"
import { checkProductAtom } from "@/store/atoms/checkatom"
export default function AddRestaurant(){
  const check = useRecoilValue(checkProductAtom)
    type AddRestaurantFormValues = z.infer<typeof AddRestaurantSchema>;
    const [imgurl,setimgurl]= useState("")
    const router = useRouter()
    const queryClient = useQueryClient()
    const form = useForm<AddRestaurantFormValues>({
        resolver: zodResolver(AddRestaurantSchema) ,
        mode:"onChange",
        defaultValues:{
            address:"",
            name:""
        }
    })
    const values = form.getValues()
    const data = useMutation({
      mutationFn: ()=> AddRestaurantt(values.name,values.address,imgurl),
      onSuccess: ()=>{
        queryClient.invalidateQueries({queryKey:["menu"]})
        toast.success("Added restaurant")
        router.replace('/')
      }
    })
    return <div className="h-screen w-full flex  justify-center items-start">
        <div className="h-5/6 w-2/3  flex border-2 border-gray-300 rounded-md shadow-md dark:bg-zinc-900 dark:border-gray-600 ">
        <div className="h-full w-2/3 hidden  lg:flex lg:flex-col  border-r-2 border-gray-200 dark:border-gray-600">
        <div className="h-5/6 w-full flex justify-center items-center">
            {imgurl.length ? (<img className="border-2 border-gray-200  dark:border-gray-600 h-2/3 w-2/3 object-cover" src={imgurl} alt="image" ></img> ) : null}
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
        <div className="h-full w-full lg:w-1/3 flex justify-center items-center">
        <div className="h-full  flex flex-col justify-around items-center">
              <Form {...form}>
                <form className="h-1/2 flex flex-col justify-around items-center" onSubmit={form.handleSubmit(()=>{
                  data.mutate()
                })}>
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
              <UploadButton endpoint="imageUploader" className="lg:hidden"
            onClientUploadComplete={(res) => {
                setimgurl(res[0].url);
                console.log("Files: ", res);
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            ></UploadButton>
            {!imgurl.length ? (<p className=" lg:hidden flex justify-center items-center text-red-400"> Please upload image first</p>) : null}
              </div>
             
        </div>
        </div>
    </div>
}