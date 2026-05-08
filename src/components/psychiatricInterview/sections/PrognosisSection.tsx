'use client'

import { Controller, type Control } from 'react-hook-form';
import { TextField } from '@mui/material';
import { InfoBox, PsychiatricSection } from '../ui';
import type { PsychiatricInterviewFormData } from '../schema';

export function PrognosisSection({ control }: { control: Control<PsychiatricInterviewFormData> }) {
  return (
    <PsychiatricSection number="۹" title="پیش‌آگهی" subtitle="Prognosis">
      <InfoBox>اظهار نظر در مورد سیر محتمل آتی، وسعت و فرجام اختلال، عوامل پیش‌آگهی خوب و بد، اهداف اختصاصی درمان</InfoBox>
      <Controller name="prognosis" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />} />
    </PsychiatricSection>
  );
}

