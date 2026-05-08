'use client'

import { Controller, type Control, type FieldErrors } from 'react-hook-form';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';
import { PsychiatricSection } from '../ui';
import type { PsychiatricInterviewFormData } from '../schema';

export function IdentifyingDataSection({
  control,
  errors,
}: {
  control: Control<PsychiatricInterviewFormData>;
  errors: FieldErrors<PsychiatricInterviewFormData>;
}) {
  return (
    <PsychiatricSection number="۱" title="اطلاعات هویتی" subtitle="Identifying Data (ID)" defaultExpanded>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="نام و نام خانوادگی"
              fullWidth
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
            />
          )}
        />
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="سن"
              type="number"
              fullWidth
              error={!!errors.age}
              helperText={errors.age?.message}
            />
          )}
        />

        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <FormControl error={!!errors.gender}>
              <FormLabel>جنسیت</FormLabel>
              <RadioGroup row {...field} value={field.value ?? ''}>
                <FormControlLabel value="male" control={<Radio />} label="مرد" />
                <FormControlLabel value="female" control={<Radio />} label="زن" />
              </RadioGroup>
              {errors.gender ? <FormHelperText>{errors.gender.message}</FormHelperText> : null}
            </FormControl>
          )}
        />

        <Controller
          name="maritalStatus"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth error={!!errors.maritalStatus}>
              <InputLabel>وضعیت تاهل</InputLabel>
              <Select {...field} value={field.value ?? ''} label="وضعیت تاهل">
                <MenuItem value="single">مجرد</MenuItem>
                <MenuItem value="married">متاهل</MenuItem>
                <MenuItem value="divorced">مطلقه</MenuItem>
                <MenuItem value="widowed">بیوه</MenuItem>
              </Select>
              {errors.maritalStatus ? <FormHelperText>{errors.maritalStatus.message}</FormHelperText> : null}
            </FormControl>
          )}
        />

        <Controller name="occupation" control={control} render={({ field }) => <TextField {...field} label="شغل" fullWidth />} />
        <Controller name="religion" control={control} render={({ field }) => <TextField {...field} label="مذهب" fullWidth />} />
        <Controller name="language" control={control} render={({ field }) => <TextField {...field} label="زبان" fullWidth />} />
        <Controller name="nationality" control={control} render={({ field }) => <TextField {...field} label="ملیت / نژاد" fullWidth />} />

        <Controller
          name="education"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth error={!!errors.education}>
              <InputLabel>میزان تحصیلات</InputLabel>
              <Select {...field} value={field.value ?? ''} label="میزان تحصیلات">
                <MenuItem value="illiterate">بی‌سواد</MenuItem>
                <MenuItem value="elementary">ابتدایی</MenuItem>
                <MenuItem value="middle">راهنمایی</MenuItem>
                <MenuItem value="high_school">دیپلم</MenuItem>
                <MenuItem value="associate">فوق دیپلم</MenuItem>
                <MenuItem value="bachelor">لیسانس</MenuItem>
                <MenuItem value="master">فوق لیسانس</MenuItem>
                <MenuItem value="phd">دکترا</MenuItem>
              </Select>
              {errors.education ? <FormHelperText>{errors.education.message}</FormHelperText> : null}
            </FormControl>
          )}
        />

        <Controller name="birthPlace" control={control} render={({ field }) => <TextField {...field} label="محل تولد" fullWidth />} />
      </Box>

      <Controller name="address" control={control} render={({ field }) => <TextField {...field} label="آدرس" fullWidth multiline rows={2} />} />
      <Controller name="phone" control={control} render={({ field }) => <TextField {...field} label="شماره تلفن" fullWidth />} />
    </PsychiatricSection>
  );
}

