import type { ReactNode } from 'react';
import { Alert, Accordion, AccordionDetails, AccordionSummary, Box, Chip, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function PsychiatricSection({
  number,
  title,
  subtitle,
  children,
  defaultExpanded = false,
}: {
  number: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  defaultExpanded?: boolean;
}) {
  return (
    <Accordion dir="rtl" defaultExpanded={defaultExpanded} sx={{ mb: 1 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Chip label={number} size="small" color="primary" />
          <Box>
            <Typography sx={{ fontWeight: 600 }}>{title}</Typography>
            {subtitle ? (
              <Typography variant="caption" color="text.secondary">
                {subtitle}
              </Typography>
            ) : null}
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>{children}</Box>
      </AccordionDetails>
    </Accordion>
  );
}

export function SubLabel({ label, hint }: { label?: string; hint?: string }) {
  return (
    <Box sx={{ mb: 0.5 }}>
      {label ? (
        <Typography variant="body2" sx={{ fontWeight: 600 }} color="text.primary">
          {label}
        </Typography>
      ) : null}
      {hint ? (
        <Typography variant="caption" color="text.secondary">
          {hint}
        </Typography>
      ) : null}
    </Box>
  );
}

export function InfoBox({ children }: { children: ReactNode }) {
  return (
    <Alert
      severity="info"
      icon={false}
      sx={{
        bgcolor: (t) => (t.palette.mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(2, 136, 209, 0.08)'),
        border: '1px solid',
        borderColor: (t) => (t.palette.mode === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(2, 136, 209, 0.25)'),
        '& .MuiAlert-message': { width: '100%' },
      }}
    >
      <Typography variant="body2" sx={{ lineHeight: 2, whiteSpace: 'pre-line' }}>
        {children}
      </Typography>
    </Alert>
  );
}

