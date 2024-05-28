"use client"
import ProductCard from "@/components/productcard";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { productList, productListSelector } from "@/store/atoms/checkatom";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "./loading";
export default function Products() {
  const { data, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/api/auth/signin');
    }
  }, [status, router]);
  const productsLoadable = useRecoilValueLoadable(productListSelector);
  const setProducts = useSetRecoilState(productList);
  useEffect(() => {
    if (productsLoadable.state === 'hasValue') {
      console.error('Error fetching product list:', productsLoadable.contents);
      setProducts(productsLoadable.contents);
    } else if (productsLoadable.state === 'hasError') {
      console.error('Error fetching product list:', productsLoadable.contents);
    }
  }, [productsLoadable, setProducts]);
  if (productsLoadable.state === 'loading') {
    return <Loading></Loading>;
  }
  return (
    <div className="w-full">
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 min-h-screen w-10/12">
          {productsLoadable.state === 'hasValue' &&
            productsLoadable.contents.data.map((product: any) => (
              <ProductCard key={product.id} imgurl={product.imgurl} name={product.name} price={product.price} description={product.description} stock={product.stock} id={product.id} />
            ))}
        </div>
      </div>
    </div>
  );
}
Products.displayName = 'Products';