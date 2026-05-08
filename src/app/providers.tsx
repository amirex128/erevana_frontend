'use client'

import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter"

import { theme, cache } from "@/utils/theme"

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AppRouterCacheProvider options={{enableCssLayer:true}}>
            <CacheProvider value={cache}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </CacheProvider>
        </AppRouterCacheProvider>
    )
}