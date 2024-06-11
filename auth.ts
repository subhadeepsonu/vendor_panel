import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./db";
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
  callbacks: {
    async signIn({ user }) {
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
      token.role = user.role
      token.brandId = user.brandId
        return token
    },
    session({ session,user}) {
      session.user.role= user.role
      session.user.brandId = user.brandId
      return session
    }
  },
  pages:{
    signIn:"/login"
  }
});
