'use client'
// app/layout.tsx
import "./globals.css";
import { iranSansX } from '@/utils/fonts'
import Providers from "@/app/providers";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fa" dir="rtl" className={iranSansX.variable}>
        <body className={iranSansX.className}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    )
}