'use client'

import { Controller, type Control } from 'react-hook-form';
import { TextField } from '@mui/material';
import { InfoBox, PsychiatricSection, SubLabel } from '../ui';
import type { PsychiatricInterviewFormData } from '../schema';

export function PastIllnessesSection({ control }: { control: Control<PsychiatricInterviewFormData> }) {
  return (
    <PsychiatricSection number="۴" title="بیماری‌های قبلی" subtitle="Past Illnesses (PI)">
      <SubLabel
        label="الف) روان‌پزشکی، روان‌شناسی (Psychiatric, Psychology)"
        hint="علائم بیمار، وسعت ناتوانی، نوع درمان‌های به عمل آمده، نوع/مدت بیماری، تأثیر درمان‌های قبلی و میزان رعایت درمان"
      />
      <InfoBox>در این بخش، علائم بیمار، وسعت ناتوانی، نوع درمان‌های به عمل آمده، نوع/مدت بیماری، تأثیر درمان‌های قبلی و میزان رعایت درمان ثبت می‌شود.</InfoBox>
      <Controller name="psychiatricHistory" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />} />

      <SubLabel label="ب) پزشکی (Medical)" hint="بیماری‌های داخلی مهم، جراحی‌ها و ضربه‌های مهم خصوصاً آن‌هایی که مستلزم بستری شدن بودند" />
      <InfoBox>
        در این قسمت، به مرور علائم پرداخته می‌شود و بیماری‌های داخلی مهم، جراحی‌ها و ضربه‌های مهم (خصوصاً آن‌هایی که مستلزم بستری شدن بوده‌اند) بررسی می‌گردد.
      </InfoBox>
      <Controller name="medicalHistory" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />} />

      <SubLabel label="ج) تاریخچه مصرف الکل یا مواد دیگر (Alcohol & Other Substance History)" hint="جزئیات مقدار و دفعات مصرف الکل و مواد دیگر" />
      <InfoBox>در این بخش، از تمام بیماران می‌بایست در مورد مصرف الکل و مواد دیگر، جزئیات مقدار و دفعات مصرف سؤال شود.</InfoBox>
      <Controller name="substanceHistory" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />} />
    </PsychiatricSection>
  );
}

