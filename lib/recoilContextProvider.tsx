'use client';
import React, { Children } from "react";
import { RecoilRoot } from "recoil";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
const queryClient = new QueryClient()
export default function RecoilContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <RecoilRoot>
            {children}
        </RecoilRoot>
    );
}
export  function ReactQuearyProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            </QueryClientProvider>
        
    );
}