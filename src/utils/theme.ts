import { createTheme } from '@mui/material/styles'
import createCache from "@emotion/cache";
import { prefixer } from 'stylis';
import rtlPlugin from '@mui/stylis-plugin-rtl';

export const theme = createTheme({
    typography: {
        fontFamily: 'var(--font-iransansx)',
    },
    direction: 'rtl',
})

export const cache = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

