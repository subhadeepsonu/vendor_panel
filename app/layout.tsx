import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
      <Sidebar></Sidebar>
        <div className="flex justify-start min-h-screen items-startr lg:pl-[250px] pl-[75px] bg-white dark:bg-gray-900 ">
        {children}
        </div></body>
    </html>
  );
}