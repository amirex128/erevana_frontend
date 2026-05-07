import { Controller, type Control } from 'react-hook-form';
import { TextField } from '@mui/material';
import { PsychiatricSection, SubLabel } from '../ui';
import type { PsychiatricInterviewFormData } from '../schema';

export function HpiSection({ control }: { control: Control<PsychiatricInterviewFormData> }) {
  return (
    <PsychiatricSection number="۳" title="تاریخچه بیماری فعلی" subtitle="History of Present Illness (HPI)">
      <SubLabel label="الف) شروع بیماری (Onset)" hint="چه زمانی شروع شد؟" />
      <Controller name="onset" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />} />

      <SubLabel label="ب) مدت بیماری (Duration & Course)" hint="چه مدت است که این علائم وجود دارد؟" />
      <Controller name="duration" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />} />

      <SubLabel label="ج) عوامل تسریع‌کننده (Precipitating Factors)" hint="چه رویدادی باعث بدتر شدن وضعیت شد؟" />
      <Controller
        name="precipitatingFactors"
        control={control}
        render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />}
      />

      <SubLabel label="د) نشانگان (Symptoms)" hint="علائم بیمار چیست؟" />
      <Controller name="symptoms" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />} />

      <SubLabel label="ه) پیامدها (Consequences)" hint="این بیماری چه تأثیری بر زندگی بیمار داشته؟" />
      <Controller name="consequences" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />} />
    </PsychiatricSection>
  );
}

