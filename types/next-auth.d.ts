import { DefaultSession } from "next-auth"
import { User } from "next-auth"

declare module "next-auth" {
    interface Session {
        user :User & DefaultSession
    }
    interface User {
        role : String | null,
        brandid: number | null
    }
}