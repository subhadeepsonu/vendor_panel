import NextAuth, { CredentialsSignin } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./db";
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter:PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  session:{
    strategy:"database"
  },
  providers: [
    GoogleProvider({
      clientId: process.env.Google_client_Id,
      clientSecret: process.env.Google_Client_secret,
      async profile(profile){
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      }
    },
  ),
  
  ],
  callbacks: {
    async signIn({ user ,credentials,account}) {
      
      const response = await prisma.user.findUnique({
        where:{
          email:user.email!
        }
      })
      user.role=response?.role 
      user.brandId=response?.brandId
      
    return true
    },
    jwt({token,user}){
      token.role = user.role ?? null
      token.brandId = user.brandId ?? null
        return token
    },
    session({ session,user}) {
      session.user.role= user.role ?? null
      session.user.brandId = user.brandId ?? null
      return session
    }
  },
  pages:{
    
  }
});
