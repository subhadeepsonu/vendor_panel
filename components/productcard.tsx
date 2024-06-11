    'use client'
    import { Button } from "./ui/button";
    import { Fade } from "react-awesome-reveal";
    import { Input } from "./ui/input";
    import { toast } from "sonner";
    import { updateStock } from "./actions/updatestock";
    import { useState } from "react";
    import { useRecoilState } from "recoil";
    import { checkProductAtom } from "@/store/atoms/checkatom";
import { TrashIcon } from "@radix-ui/react-icons";
import { DeleteProduct } from "./actions/deleteProduct";
    export default function ProductCard(props:any){
        const [value,setValue] = useState(0)
        const [check,setCheck] =  useRecoilState(checkProductAtom)
        const handleUpdateStock = async (stock: number) => {
            try {
            await updateStock(stock,props.id)
            setCheck(check=>check+1)
            toast.success('Updated successfully');
            
            } catch (error) {
            toast.error('Failed to update stock');
            }
        };
        const handleDeleteProduct = async () => {
            try {
            await DeleteProduct(parseInt(props.id))
            setCheck(check=>check+1)
            toast.success('Product Deleted')
            } catch (error) {
                console.log(error)
            toast.error('Unable to delete product');
            }
        };


        return <Fade duration={500} delay={0}  className="w-72 h-80  rounded-lg border-2 border-gray-100 shadow-sm  duration-150 hover:shadow-lg">
            <div className="h-full w-full flex flex-col justify-center items-center">
                <div className="h-2/3 w-full border-b-2 border-gray-300 border-dotted">
                    <div className="h-5/6   flex justify-center rounded-t-lg items-center">
                        <img src={props.imgurl} className="h-full w-full object-cover rounded-t-lg"></img>
                        
                    </div>
                    <div className="h-1/6 w-full font-semibold flex justify-evenly items-center">
                        {props.name}
                    </div>
                </div>
                <div className="h-1/3 w-full">
                    <div className="h-1/2 w-full font-semibold flex justify-around items-center">
                    <div className="flex w-2/3 justify-around items-center font-semibold">
                        <div className="font-medium">
                            Price:{props.price} 
                        </div>
                        <div className="font-medium">
                            Stock: {props.stock}
                        </div>                       
                    </div>
                        <Input type="number"
                            value={value === 0 ? '' : value} 
                            onChange={(e)=>{
                                setValue(parseInt(e.target.value))
                            }} className="w-1/3 mr-1 border-2 border-gray-200"></Input>
                        
                    </div>
                    <div className="flex justify-around items-center font-semibold">
                  
                        <Button onClick={()=>{
                            handleUpdateStock(0)
                        }}>
                            0 stock
                        </Button>                
                        <Button onClick={()=>{
                            setValue(0)
                            handleUpdateStock(value)
                             }} >Update stock</Button>
                               <Button onClick={()=>{
                        handleDeleteProduct()
                    }}><TrashIcon></TrashIcon></Button>
                    </div>
                </div>
            </div>
        
        </Fade>
    }