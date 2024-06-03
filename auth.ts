import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaClient } from '@prisma/client'
import { cookies } from "next/headers";
const prisma = new PrismaClient()
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.Google_client_Id,
      clientSecret: process.env.Google_Client_secret
    })
  ],
  pages:{
    signOut:"/signout"
  }
  ,
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (account?.provider === "google") {
          const data:any = await  prisma.admin.findUnique({
            where:{
              email:user.email!
            },
            include:{
              brands:true
            }
          })
          console.log(data)
          if(data){
            cookies().set('brandId',`${data.brands.id}`,{httpOnly:true})
            return true
          }
          else{
            try {
              const resp = await prisma.admin.create({
                data:{
                  email:user.email!,
                  username:user.name!,
                  imgurl:user.image!
                }
              })
              return true
            } catch (error) {
              return Promise.resolve('/products'); 
            }
          }
        }
        return Promise.resolve('/products'); 
      } catch (error) {
        console.error("Error during sign-in:", error);
        return Promise.resolve('/signin');
      }
    },
    
  }
});
