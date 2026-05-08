'use client'

import { Controller, type Control } from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { InfoBox, PsychiatricSection } from '../ui';
import type { PsychiatricInterviewFormData } from '../schema';

export function TreatmentPlanSection({ control }: { control: Control<PsychiatricInterviewFormData> }) {
  return (
    <PsychiatricSection number="۱۰" title="طرح و نقشه درمان" subtitle="Treatment Plan">
      <InfoBox>
        نوع درمان پیشنهادی، نقش داروها، درمان سرپایی یا بستری، تعداد جلسات لازم، نوع اجتماعی درمان، نوع روان‌درمانی، نشانه‌های بالینی یا مشکلاتی که باید درمان شوند ثبت می‌شود.
      </InfoBox>
      <Controller
        name="treatmentType"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel>نوع درمان</InputLabel>
            <Select {...field} value={field.value ?? ''} label="نوع درمان">
              <MenuItem value="outpatient">سرپایی</MenuItem>
              <MenuItem value="inpatient">بستری</MenuItem>
              <MenuItem value="day_hospital">بیمارستان روزانه</MenuItem>
              <MenuItem value="combined">ترکیبی</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="treatmentPlan"
        control={control}
        render={({ field }) => <TextField {...field} fullWidth multiline rows={4} placeholder="جزئیات طرح درمان را توضیح دهید..." />}
      />
    </PsychiatricSection>
  );
}

