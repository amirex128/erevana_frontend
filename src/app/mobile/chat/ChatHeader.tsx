import { Box, Avatar, Typography } from '@mui/material';

export default function ChatHeader() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 2,
                borderBottom: 1,
                borderColor: 'divider',
                bgcolor: 'background.paper',
            }}
        >
            <Avatar
                src="/support-avatar.png"
                alt="تیم پشتیبانی"
                sx={{ width: 38, height: 38 }}
            />
            <Typography sx={{fontSize:16}} variant="h6" component="h1">
                تیم پشتیبانی
            </Typography>
        </Box>
    );
}
