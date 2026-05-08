'use client'

import { Box, Button } from '@mui/material';

export function SubmitBar() {
  return (
    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
      <Button color="info" type="submit" variant="contained" size="large" sx={{ px: 5 }}>
        ثبت فرم
      </Button>
    </Box>
  );
}

