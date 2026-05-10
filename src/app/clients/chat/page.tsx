import { Box } from '@mui/material';
import ChatContainer from "@/components/chat/ChatContainer";

export default function ChatPage() {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 70,
                bottom: 79,
                left: 7,
                right: 7,
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ChatContainer />
        </Box>
    );
}
