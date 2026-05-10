import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from 'react-hook-form';
import { ChatFormData } from './types';

interface ChatFooterProps {
    onSendMessage: (message: string) => void;
}

export default function ChatFooter({ onSendMessage }: ChatFooterProps) {
    const { register, handleSubmit, reset } = useForm<ChatFormData>();

    const onSubmit = (data: ChatFormData) => {
        if (data.message.trim()) {
            onSendMessage(data.message);
            reset();
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: 'flex',
                gap: 2,
                p: 2,
                borderTop: 1,
                borderColor: 'divider',
                bgcolor: 'background.paper',
            }}
        >
            <TextField
                {...register('message')}
                fullWidth
                placeholder="پیام خود را بنویسید..."
                variant="outlined"
                size="small"
                autoComplete="off"
            />
            <IconButton type="submit" color="primary" sx={{ flexShrink: 0 }}>
                <SendIcon />
            </IconButton>
        </Box>
    );
}
