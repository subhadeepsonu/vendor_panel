import Link from "next/link";
import { FaHotjar, FaRupeeSign, FaSadCry, FaShoppingBag } from "react-icons/fa";
import HomePageOrders from "./homePageOrders";

export default function Homedash(props: any) {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white min-h-screen dark:bg-zinc-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-around items-center  gap-10  ">
        <div className="w-80 h-52 bg-white border-2 dark:bg-zinc-900 border-gray-200 dark:border-gray-700 rounded-xl shadow-sm  transition transform hover:shadow-lg">
          <div className="w-full h-1/2 rounded-t-lg flex flex-col justify-around items-center bg-gradient-to-r from-purple-400 to-red-500 text-white p-4">
            <div className="text-2xl font-bold">Total Orders</div>
            <div className="text-4xl">
              <FaShoppingBag />
            </div>
          </div>
          <div className="flex justify-center items-center text-green-600 text-2xl font-semibold w-full h-1/2">
            2137
          </div>
        </div>

        <div className="w-80 h-52 bg-white border-2 dark:bg-zinc-900 border-gray-200  shadow-sm dark:border-gray-700 rounded-xl transition transform hover:shadow-lg">
          <div className="w-full h-1/2 rounded-t-lg flex flex-col justify-around items-center bg-gradient-to-r from-green-400 to-blue-500 text-white p-4">
            <div className="text-2xl font-bold">Total Revenue</div>
            <div className="text-4xl">
              <FaRupeeSign />
            </div>
          </div>
          <div className="flex justify-center items-center text-green-600 text-2xl font-semibold w-full h-1/2">
            Rs. 37564
          </div>
        </div>

        <div className="w-80 h-52 bg-white border-2 dark:bg-zinc-900 border-gray-200 shadow-sm dark:border-gray-700 rounded-xl transition transform hover:shadow-lg">
          <div className="w-full h-1/2 rounded-t-lg flex flex-col justify-around items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4">
            <div className="text-2xl font-bold">Top Selling</div>
            <div className="text-4xl">
              <FaHotjar />
            </div>
          </div>
          <div className="flex justify-center items-center text-green-600 text-2xl font-semibold w-full h-1/2">
            Butter chicken
          </div>
        </div>

        <div className="w-80 h-52 bg-white border-2 dark:bg-zinc-900 border-gray-200 shadow-sm dark:border-gray-700 rounded-xl transition transform hover:shadow-lg">
          <div className="w-full h-1/2 rounded-t-lg flex flex-col justify-around items-center bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-4">
            <div className="text-2xl font-bold">Out of Stock</div>
            <div className="text-4xl">
              <FaSadCry />
            </div>
          </div>
          <div className="flex justify-center items-center text-red-600 text-lg font-semibold w-full h-1/2">
            7 products out of stock
          </div>
        </div>
      </div>

      <div className="flex justify-around w-full items-center  py-8">
        <div className="lg:text-3xl text-xl font-bold">Recent Orders</div>
        <Link href="/orders" className="text-blue-600 hover:underline">
          View All
        </Link>
      </div>

      <div className="flex justify-center items-center w-full ">
        <HomePageOrders />
      </div>
    </div>
  );
}