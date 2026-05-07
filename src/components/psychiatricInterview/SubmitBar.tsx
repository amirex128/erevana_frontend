import { Box, Button } from '@mui/material';

export function SubmitBar() {
  return (
    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
      <Button type="submit" variant="contained" size="large" sx={{ px: 5 }}>
        ثبت فرم
      </Button>
    </Box>
  );
}

