import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaClient } from '@prisma/client'
import { cookies } from "next/headers";
import { PrismaAdapter } from "@auth/prisma-adapter"
const prisma = new PrismaClient()
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter:PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
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
  )
  ],
  pages:{
    signOut:"/signout"
  }
  ,
  callbacks: {
    async signIn({ user, account }) {
    return true
    },
    jwt({token,user}){
        return token
    },
    session({ session, token}) {
      
      return session
    }

    
  }
});
