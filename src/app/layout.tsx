'use client'
import "./globals.css";
import { iranSansX } from '@/utils/fonts'
import Providers from "@/app/providers";
import {Box} from "@mui/material";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fa" dir="rtl" className={iranSansX.variable}>
        <body className={iranSansX.className}>
        <Providers>
            {/*<Box sx={{overflowX: 'auto',maxHeight: '100vh'}}>*/}
                {children}
            {/*</Box>*/}
        </Providers>
        </body>
        </html>
    )
}