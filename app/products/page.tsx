    "use client"
    import ProductCard from "@/components/productCard";
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
    import { MagnifyingGlassIcon, TriangleDownIcon } from "@radix-ui/react-icons";
    import { useEffect, useState } from "react";
    import axios, {Axios} from "axios"

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
        return <div className="bg-gray-100">
            <div className=" p-5 m-5 rounded-md flex justify-between items-center bg-white shadow-sm border-b-2 border-gray-300">
            <div className="font-semibold text-xl">Products</div>
            <div className="flex w-1/3 ">
            <Input type="text" placeholder="Search" className="w-full mr-2"></Input>
            <Button className="mr-2">
                <MagnifyingGlassIcon></MagnifyingGlassIcon>
            </Button>
            
            <Button>
                Filter
                <TriangleDownIcon></TriangleDownIcon>
            </Button>
            </div>
            </div>
    
        <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  min-h-screen  ">
            {products.map((product:any,index:number) =>(
                <ProductCard key={index} url={product.imgurl} name={product.name} price={product.price}  ></ProductCard>
            ))}
        </div>
        <Button className="fixed bottom-7 right-7" size={"lg"}> Add product</Button>
        </div>
    }
    Products.displayName = 'Products';
