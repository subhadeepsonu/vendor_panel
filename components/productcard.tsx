    'use client'
    import { Button } from "./ui/button";
    import { Fade } from "react-awesome-reveal";
    import { Input } from "./ui/input";
    import { toast } from "sonner";
    import { updateStock } from "./actions/updatestock";
    import { useState } from "react";
    import { useRecoilState } from "recoil";
    import { checkProductAtom } from "@/store/atoms/checkatom";
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

        return <Fade duration={500} delay={0}  className="w-96 h-28  rounded-sm border-2 border-gray-100 shadow-sm  duration-150">
            <div className="h-full w-full flex justify-center items-center">
                <div className="h-full w-1/2">
                <div className="h-1/2 w-full font-semibold flex justify-center items-center">
                    {props.name}
                </div>
                <div className="flex justify-center items-center font-semibold">
                Stock: {props.stock}
                </div>
                </div>
                <div className="h-full w-1/2">
                <div className="h-1/2 w-full font-semibold flex justify-center items-center">
                    <Input type="number"
                    value={value === 0 ? '' : value} 
                    onChange={(e)=>{
                        setValue(parseInt(e.target.value))
                    }} className="w-2/3"></Input>
                </div>
                <div className="flex justify-center items-center font-semibold">
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