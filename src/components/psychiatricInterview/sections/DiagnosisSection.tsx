import { Controller, type Control } from 'react-hook-form';
import { TextField } from '@mui/material';
import { PsychiatricSection } from '../ui';
import type { PsychiatricInterviewFormData } from '../schema';

export function DiagnosisSection({ control }: { control: Control<PsychiatricInterviewFormData> }) {
  return (
    <PsychiatricSection number="۸" title="تشخیص" subtitle="Diagnosis">
      {[
        ['axis1', 'محور ۱: اختلال بالینی (Clinical Syndromes)'],
        ['axis2', 'محور ۲: اختلال شخصیت و عقب‌ماندگی ذهنی (Personality Disorder & Mental Retardation)'],
        ['axis3', 'محور ۳: وضعیت پزشکی عمومی (General Medical Condition)'],
        ['axis4', 'محور ۴: مشکلات روانی و محیطی (Psychological & Environmental Problem)'],
        ['axis5', 'محور ۵: سنجش کلی کارکرد (Global Assessment of Functioning)'],
      ].map(([name, label]) => (
        <Controller
          key={name}
          name={name as keyof PsychiatricInterviewFormData}
          control={control}
          render={({ field }) => (
            <TextField {...field} label={label} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
          )}
        />
      ))}
    </PsychiatricSection>
  );
}

