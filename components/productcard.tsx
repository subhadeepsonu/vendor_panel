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

        return <Fade duration={500} delay={0}  className="w-80 h-80  rounded-md border-2 border-gray-200 shadow-md  duration-150">
            <div className="h-full w-full flex flex-col justify-center items-center">
                <div className="h-2/3 w-full border-b-2 border-gray-300 border-dotted">
                    <div className="h-5/6 bg-gray-50  flex justify-center rounded-t-md items-center">
                        <img src={props.imgurl} className="h-full  "></img>
                        
                    </div>
                    <div className="h-1/6 w-full font-semibold flex justify-evenly items-center">
                        {props.name}
                    </div>
                </div>
                <div className="h-1/3 w-full">
                    <div className="h-1/2 w-full font-semibold flex justify-around items-center">
                    <div className="flex w-2/3 justify-around items-center font-semibold">
                        <div className="">
                            Price:{props.price} 
                        </div>
                        <div>
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
                            setValue(0)
                            handleUpdateStock(value)
                             }} >Update stock</Button>
                        <Button onClick={()=>{
                            handleUpdateStock(0)
                        }}>
                            Out Of stock
                        </Button>
                    </div>
                </div>
            </div>
        
        </Fade>
    }