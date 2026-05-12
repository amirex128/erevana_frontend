import { z } from 'zod';

export const thoughtRecordSchema = z.object({
    situation: z.string().min(10, 'لطفاً موقعیت را با جزئیات بیشتری توضیح دهید'),
    emotions: z.string().min(5, 'لطفاً احساسات خود را بنویسید'),
    automaticThoughts: z.string().min(5, 'لطفاً افکار خودآیند خود را بنویسید'),
    evidenceFor: z.string().min(5, 'لطفاً شواهد موافق را بنویسید'),
    evidenceAgainst: z.string().min(5, 'لطفاً شواهد مخالف را بنویسید'),
    balancedThought: z.string().min(10, 'لطفاً فکر متعادل را با جزئیات بیشتری بنویسید'),
});

export type ThoughtRecordFormData = z.infer<typeof thoughtRecordSchema>;

export interface Step {
    id: keyof ThoughtRecordFormData;
    title: string;
    description: string;
    placeholder: string;
    icon: string;
    color: string;
    tip: string;
}