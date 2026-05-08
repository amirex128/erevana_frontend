'use client';

import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatFooter from './ChatFooter';
import { Message } from './types';

const initialMessages: Message[] = [
    {
        id: '1',
        text: 'سلام! چطور می‌تونم کمکتون کنم؟',
        sender: 'support',
        timestamp: new Date(Date.now() - 60000),
    },
];

export default function ChatContainer() {
    const [messages, setMessages] = useState<Message[]>(initialMessages);

    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.95) {
                const newMessage: Message = {
                    id: Date.now().toString(),
                    text: 'این یک پیام تستی از پشتیبانی است',
                    sender: 'support',
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, newMessage]);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleSendMessage = async (text: string) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            text,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, newMessage]);
    };

    return (
        <Box
            className="rounded-lg"

            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                maxWidth: 800,
                overflow: 'hidden',
            }}
        >
            <ChatHeader />
            <ChatMessages messages={messages} />
            <ChatFooter onSendMessage={handleSendMessage} />
        </Box>
    );
}
