    "use client"
    
    import { Button } from "@/components/ui/button";
    import { useEffect, useState } from "react";
    import axios from "axios"
import Link from "next/link";
import ProductCard from "@/components/productcard";


    export  default  function Products(){
        const [products,setproducts] = useState<any>([])
        useEffect(()=>{
            const fetchproducts = async ()=>{
                try {
                    console.log("haha")
                    const responce = await axios.get("http://localhost:3000/api/products/createproduct")
                    console.log(responce.data.data)
                    setproducts(responce.data.data)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchproducts()
        }
            
            ,[])
        return <div className=" w-full">
       
    <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-5  min-h-screen w-10/12 ">
            {products.map((product:any,index:number) =>(
                <ProductCard key={index} imgurl={product.imgurl} name={product.name} price={product.price} description={product.description}  ></ProductCard>
            ))}
            
            
        </div>
        </div>
        <Link href={"/products/addproduct"}>
        <Button className="fixed bottom-7 right-7" size={"lg"}> Add item</Button>
        </Link>
        </div>
    }
    Products.displayName = 'Products';
