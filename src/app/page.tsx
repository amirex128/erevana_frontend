'use client'
import { Box, Typography } from '@mui/material'

export default function Home() {
    return (
            <Box sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom  sx={{ fontWeight: 600 }}>
                    خوش آمدید
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    محتوای صفحه اصلی شما اینجا قرار می‌گیرد
                </Typography>
            </Box>
    )
}
