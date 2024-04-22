import ProductCard from "@/components/productCard";
import { Button } from "@/components/ui/button";


export default function Products(){
    return <div className="bg-gray-200">
        <div className="font-bold text-3xl p-5 flex justify-center items-center bg-white shadow-sm border-b-2 border-gray-300">Products</div>
    <div className="grid grid-cols-5 min-h-screen  ">
       
        <ProductCard url="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg" name="burger" price="200" />
        <ProductCard url="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg" name="burger" price="200" />
        <ProductCard url="https://utfs.io/f/3c95ce9a-4391-4864-9ae9-38c81129e965-7unna1.png" name="burger" price="200" />
        <ProductCard url="https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg" name="burger" price="200" />
        <ProductCard url="https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg" name="burger" price="200" />
        <ProductCard url="https://www.ikea.com/images/07/a6/07a6b54ae88dc89f459a8a5dcfc7d7eb.jpg?f=s" name="burger" price="200" />
        <ProductCard url="https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505" name="burger" price="200" />
        <ProductCard url="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg" name="burger" price="200" />
        <ProductCard url="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg" name="burger" price="200" />
        <ProductCard url="https://utfs.io/f/3c95ce9a-4391-4864-9ae9-38c81129e965-7unna1.png" name="burger" price="200" />
        <ProductCard url="https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg" name="burger" price="200" />
        <ProductCard url="https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg" name="burger" price="200" />
        <ProductCard url="https://www.ikea.com/images/07/a6/07a6b54ae88dc89f459a8a5dcfc7d7eb.jpg?f=s" name="burger" price="200" />
        <ProductCard url="https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505" name="burger" price="200" />
    </div>
    <Button className="fixed bottom-7 right-7" size={"lg"}> Add product</Button>
    </div>
}
Products.displayName = 'Products';
