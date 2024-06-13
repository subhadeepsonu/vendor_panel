"use client"
import ProductCard from "@/components/productcard";
import {useQuery} from "@tanstack/react-query"
import {getProductBrandId} from  "@/components/actions/getProductBrandid"
import Loading from "@/app/menu/loading";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filterProductListAtom, productListAtom, productNameAtom } from "@/store/atoms/checkatom";
import { any } from "zod";
export default function Menu() {
const setProductList = useSetRecoilState(productListAtom)
const filterProductList = useRecoilValue(filterProductListAtom)
const setProductNameAtom = useSetRecoilState(productNameAtom)
const {data: value,error,isLoading} :any = useQuery({
    queryKey:["menu"],
    queryFn: ()=>{
      return getProductBrandId()

    },
    staleTime:2000,
  })
  console.log("usequery",value)
  if(isLoading){
    return <Loading></Loading>
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if(value){
    setProductList(value)
  if(value?.length==0){
    return <div className="flex justify-center   items-center h-screen lg:text-2xl font-bold text-center">
      You currently have no products 😔
      <Link href={"/menu/addProduct"}>
          <Button className="fixed right-5 bottom-5" size={"lg"}>Add Product</Button>
          </Link>
    </div>
  }
  else{
    return (
        <div className="flex flex-col justify-center items-center  ">
          <Input onChange={(e)=>{
            console.log(e.target.value)
            setProductNameAtom(e.target.value)
          }} placeholder="Product Name" className=" w-1/2 lg:w-1/4 m-5 dark:border-2 dark:border-gray-600"></Input>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 min-h-screen ">
            { filterProductList.map((product: any) => (
                <ProductCard key={product.id} imgurl={product.imgurl} name={product.name} price={product.price} description={product.description} stock={product.stock} id={product.id} />
              ))}
          </div>
          <Link href={"/menu/addProduct"}>
          <Button className="fixed right-5 bottom-5" size={"lg"}>Add Product</Button>
          </Link>
        </div>
      
    );
  }
}
}