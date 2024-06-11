'use client'
import { Button } from "./ui/button";
import { Fade } from "react-awesome-reveal";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { updateStock } from "./actions/updatestock";
import { useState } from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import { DeleteProduct } from "./actions/deleteProduct";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export default function ProductCard(props:any){
        const [ava,setava] = useState(0)
        const queryClient = useQueryClient()
        const MutateUpdateStock = useMutation({
            mutationFn:()=> updateStock(ava,props.id),
            onSuccess:()=>{
                queryClient.invalidateQueries({queryKey:["menu"]})
                toast.success('Updated successfully');
                setava(0)
            },
            onError:()=>{
                toast.error("Could not update")
            }
        })
        const MutateZeroStock = useMutation({
            mutationFn:()=> updateStock(0,props.id),
            onSuccess:()=>{
                queryClient.invalidateQueries({queryKey:["menu"]})
                toast.success('Updated successfully');
            },
            onError:()=>{
                toast.error("Could not update")
            }
        })
        const MutateDeleteProduct = useMutation({
            mutationFn:()=> DeleteProduct(parseInt(props.id)),
            onSuccess:()=>{
                queryClient.invalidateQueries({queryKey:["menu"]})
                toast.success('Deleted successfully');
            },
            onError:()=>{
                toast.error("Could not delete")
            }
        })
        return <Fade duration={500} delay={0}  className="w-72 h-80 bg-white  rounded-lg border-2 border-gray-100 shadow-sm  duration-150 hover:shadow-lg">
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
                            value={ava === 0 ? '' : ava} 
                            onChange={(e)=>{
                                setava(parseInt(e.target.value))
                            }} className="w-1/3 mr-1 border-2 border-gray-200"></Input>
                        
                    </div>
                    <div className="flex justify-around items-center font-semibold">
                        <Button disabled={MutateZeroStock.isPending} onClick={()=>{
                            MutateZeroStock.mutate()
                        }}>
                            0 stock
                        </Button>                
                        <Button disabled={MutateUpdateStock.isPending} onClick={()=>{
                                MutateUpdateStock.mutate()
                                
                             }} >Update stock</Button>
                        <AlertDialog>
                            <AlertDialogTrigger><Button><TrashIcon></TrashIcon></Button></AlertDialogTrigger>
                            <AlertDialogContent>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogCancel>cancel</AlertDialogCancel>
                                <AlertDialogAction disabled={MutateDeleteProduct.isPending} onClick={()=>{
                                    MutateDeleteProduct.mutate()
                                }}>Delete</AlertDialogAction>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
            </div>
        
        </Fade>
    }