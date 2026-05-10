import { Box, Paper, Typography } from '@mui/material';
import { Message } from './types';
import { useEffect, useRef } from 'react';

interface ChatMessagesProps {
    messages: Message[];
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <Box
            sx={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                minHeight: 0,
                bgcolor: 'grey.50',
            }}
        >
            {messages.map((message) => (
                <Box
                    key={message.id}
                    sx={{
                        display: 'flex',
                        justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                    }}
                >
                    <Paper
                        elevation={1}
                        sx={{
                            p: 2,
                            maxWidth: '70%',
                            bgcolor: message.sender === 'user' ? 'primary.main' : 'background.paper',
                            color: message.sender === 'user' ? 'primary.contrastText' : 'text.primary',
                        }}
                    >
                        <Typography variant="body1">{message.text}</Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                display: 'block',
                                mt: 0.5,
                                opacity: 0.7,
                            }}
                        >
                            {message.timestamp.toLocaleTimeString('fa-IR', {
                                hour: '2-digit',
                                minute: '2-digit',
                            })}
                        </Typography>
                    </Paper>
                </Box>
            ))}
            <div ref={messagesEndRef} />
        </Box>
    );
}
