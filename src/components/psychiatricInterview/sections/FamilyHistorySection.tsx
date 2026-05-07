import { Controller, type Control } from 'react-hook-form';
import { TextField } from '@mui/material';
import { InfoBox, PsychiatricSection } from '../ui';
import type { PsychiatricInterviewFormData } from '../schema';

export function FamilyHistorySection({ control }: { control: Control<PsychiatricInterviewFormData> }) {
  return (
    <PsychiatricSection number="۵" title="تاریخچه خانوادگی" subtitle="Family History (FH)">
      <InfoBox>
        بیماری‌های روانی، درمان و بستری شدن بستگان درجه اول بیمار.
        {'\n'}
        شرح مختصر هرگونه بیماری روانی، بستری شدن و درمان‌های انجام‌شده برای اعضای بلافصل خانواده.
        {'\n'}
        سابقه مصرف الکل و مواد دیگر در خانواده، رفتار ضد اجتماعی در خانواده، شخصیت و هوش افراد خانواده، نام اعضای خانواده، روابط خانواده (پدر/مادر/خواهر/برادر)، و نگرش بیمار نسبت به آن‌ها بررسی می‌شود.
      </InfoBox>
      <Controller name="familyHistory" control={control} render={({ field }) => <TextField {...field} fullWidth multiline rows={4} placeholder="توضیح دهید..." />} />
    </PsychiatricSection>
  );
}

