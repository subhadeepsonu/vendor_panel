"use client"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios"
import Link from "next/link";
import ProductCard from "@/components/productcard";
import { useRecoilValue } from "recoil";
import { checkProductAtom } from "@/store/atoms/checkatom";
    export  default  function Products(){
        const check = useRecoilValue(checkProductAtom)
        const [products,setproducts] = useState<any>([])
        useEffect(()=>{
            const fetchproducts = async ()=>{
                try {
                    console.log("haha")
                    const responce = await axios.get("http://localhost:3000/api/products")
                    console.log(responce.data.data)
                    setproducts(responce.data.data)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchproducts()
        }
            ,[check])
        return <div className=" w-full">
       
    <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-5  min-h-screen w-10/12 ">
            {products.map((product:any) =>(
                <ProductCard key={product.id} imgurl={product.imgurl} name={product.name} price={product.price} description={product.description} stock={product.stock} id = {product.id}  ></ProductCard>
            ))}
        </div>
        </div>
        
        </div>
    }
    Products.displayName = 'Products';