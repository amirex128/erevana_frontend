import { Controller, type Control, type FieldErrors } from 'react-hook-form';
import { TextField } from '@mui/material';
import { InfoBox, PsychiatricSection } from '../ui';
import type { PsychiatricInterviewFormData } from '../schema';

export function ChiefComplaintSection({
  control,
  errors,
}: {
  control: Control<PsychiatricInterviewFormData>;
  errors: FieldErrors<PsychiatricInterviewFormData>;
}) {
  return (
    <PsychiatricSection number="۲" title="شکایت اصلی" subtitle="Chief Complaint (CC)">
      <InfoBox>
        در این بخش، دقیقاً با کلمات خود بیمار، دلیل مراجعه یا آورده شدن او برای درمان ذکر می‌شود. توضیح بیمار هر قدر هم
        بی‌ربط و غیر عادی باشد، باید کلمه به کلمه در این قسمت نوشته شود.
        {'\n'}
        مثال: «احساس افسردگی شدیدی می‌کردم و می‌خواستم خودم را بکشم.»
      </InfoBox>
      <Controller
        name="chiefComplaint"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="شکایت اصلی"
            fullWidth
            multiline
            rows={3}
            error={!!errors.chiefComplaint}
            helperText={errors.chiefComplaint?.message}
          />
        )}
      />
    </PsychiatricSection>
  );
}

