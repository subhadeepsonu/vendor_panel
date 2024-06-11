"use server"
import { auth } from '@/auth';
import prisma from '@/db'

export async function getProductBrandId() {
  try {
    const data = await auth()
    const response = await prisma.product.findMany({
      orderBy:{
        id:"desc"
      },
      where:{
        brandId:data?.user.brandId!
      }
        
      
    });
    return response;
  } catch (error) {
    console.error("Error loading data:", error);
    throw new Error(`Failed to fetch products for brandId : ${error}`);
  }
}
