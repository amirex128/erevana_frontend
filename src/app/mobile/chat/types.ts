export interface Message {
    id: string;
    text: string;
    sender: 'user' | 'support';
    timestamp: Date;
}

export interface ChatFormData {
    message: string;
}
