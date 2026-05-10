'use client'

import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { theme, cache } from "@/utils/theme"

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <StyledEngineProvider injectFirst>
                <CacheProvider value={cache}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />

                        <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                            adapterLocale="fa"
                        >
                            {children}
                        </LocalizationProvider>

                    </ThemeProvider>
                </CacheProvider>
            </StyledEngineProvider>
        </AppRouterCacheProvider>
    )
}