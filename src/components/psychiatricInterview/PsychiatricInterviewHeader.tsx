'use client'

import { Paper, Typography } from '@mui/material';

export function PsychiatricInterviewHeader() {
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        فرم مصاحبه بالینی
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.85, mt: 0.5 }}>
        بر اساس خلاصه روان‌پزشکی کاپلان
      </Typography>
    </Paper>
  );
}

