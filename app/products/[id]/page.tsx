'use client'
import ProductCard from "@/components/productcard"
import axios from "axios"
import { useEffect, useState } from "react"
export default  function  ProductPage({params}:{params:{id: number}}){
    const [data,setdata]=useState<any>([])
    useEffect(()=>{
        const GetProduct=async ()=>{
            try {
                const id = params.id
                const product  =  await axios.get(`http://localhost:3000/api/products?id=${id}`)
                console.log(product.data.data)
                setdata(product.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        GetProduct()
        console.log(data)
    },[params.id])
    
    return <div className="">
         {data.length > 0 && <ProductCard name={data[0].name} stock={data[0].stock} description={data[0].description} />}
        
    </div>
}