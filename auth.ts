import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.Google_client_Id,
      clientSecret: process.env.Google_Client_secret
    })
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (account?.provider === "google") {
          const { name, image, email } = user;
          const data = await  prisma.admin.findUnique({
            where:{
              email:email!
            }
          })
          if(data){
            return true
          }
          else{
            try {
              const resp = await prisma.admin.create({
                data:{
                  email:email!,
                  username:name!,
                  imgurl:image!
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
    }
  }
});
