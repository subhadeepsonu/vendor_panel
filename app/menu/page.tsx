"use client"
import ProductCard from "@/components/productcard";
import { useRecoilValue} from "recoil";
import { productList, } from "@/store/atoms/checkatom";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Products() {
  const { data, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/api/auth/signin');
    }
  }, [status, router]);
  const fetchdata:any = useRecoilValue(productList)
  console.log(fetchdata)
  return (
    <div className="w-full">
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 min-h-screen w-10/12">
          { fetchdata.data.map((product: any) => (
              <ProductCard key={product.id} imgurl={product.imgurl} name={product.name} price={product.price} description={product.description} stock={product.stock} id={product.id} />
            ))}
        </div>
      </div>
    </div>
  );
}
Products.displayName = 'Products';