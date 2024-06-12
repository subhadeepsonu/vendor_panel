"use client";
import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { addProductSchema } from "../schema/schemas";
import { toast } from "sonner";
import { Addproduct } from "../actions/addProduct";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export default function AddProduct() {
  const [imgurl, setimgurl] = useState("");
  const router =  useRouter()
  const formMethods = useForm({
    resolver: zodResolver(addProductSchema),
    mode:"onChange",
    defaultValues:{
        name:"",
        price:"",
        salePrice:"",
        nonVeg:false,
        category:""
    }
  }
,);
const values = formMethods.getValues()
const queryClient = useQueryClient()
const AddProductMutation= useMutation({
  mutationFn:()=>Addproduct(imgurl,values.name,parseInt(values.price),parseInt(values.salePrice),values.nonVeg,values.category),
  onSuccess:()=>{
    queryClient.invalidateQueries({queryKey:["menu"]})
    toast.success("Added Product")
    router.replace('/menu')
  }
})
  return (
    <div className="h-screen w-full flex justify-center ">
      <div className="h-5/6 w-1/2 flex justify-around items-center border-2 border-gray-300 rounded-md shadow-md dark:bg-zinc-900 dark:border-gray-600">
        <div className="w-2/3 h-full p-5 border-r-2 border-gray-200 dark:border-gray-600">
          <div className="w-full h-5/6 flex justify-center items-center m-2">
            {imgurl.length ? (
              <img className="border-2 border-gray-200 dark:border-gray-600 h-full w-full object-cover" src={imgurl} alt="image" ></img>
            ) : null}
          </div>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setimgurl(res[0].url);
              console.log("Files: ", res);
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
          {!imgurl.length ? (<p className="flex justify-center items-center text-red-400"> Please upload image first</p>  ) : null}
        </div>
        <div className="w-1/3 h-full p-5 flex justify-around items-center ">
        
          <FormProvider {...formMethods} >
            <form  onSubmit={formMethods.handleSubmit(()=>{
                AddProductMutation.mutate()
            })} className="flex flex-col justify-around items-center h-full">
              <FormField
                control={formMethods.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Product Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formMethods.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Price" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formMethods.control}
                name="salePrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sale Price</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Sale Price" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formMethods.control}
                name="nonVeg"
                render={({ field }) => (
                  <FormItem>
                    <FormControl >
                      <Checkbox   checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel>Non-Veg</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formMethods.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="BIRYANI">BIRYANI</SelectItem>
                        <SelectItem value="CURRY">CURRY</SelectItem>
                        <SelectItem value="BREADS">BREADS</SelectItem>
                        <SelectItem value="CHINESE">CHINESE</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={!imgurl.length} type="submit">Submit</Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
