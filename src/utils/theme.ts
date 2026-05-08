import { createTheme } from '@mui/material/styles'
import createCache from "@emotion/cache";
import { prefixer } from 'stylis';
import rtlPlugin from '@mui/stylis-plugin-rtl';

export const theme = createTheme({
    direction: 'rtl',

    typography: {
        fontFamily: 'var(--font-iransansx)',
    },

    palette: {
        mode: 'light',

        // رنگ اصلی پروژه
        primary: {
            main: '#1f8561',
            light: '#42a5f5',
            dark: '#1565c0',
            contrastText: '#ffffff',
        },

        // رنگ ثانویه
        secondary: {
            main: '#9c27b0',
            light: '#ba68c8',
            dark: '#7b1fa2',
            contrastText: '#ffffff',
        },

        // رنگ موفقیت
        success: {
            main: '#2e7d32',
            light: '#4caf50',
            dark: '#1b5e20',
            contrastText: '#ffffff',
        },

        // رنگ خطا
        error: {
            main: '#d32f2f',
            light: '#ef5350',
            dark: '#c62828',
            contrastText: '#ffffff',
        },

        // هشدار
        warning: {
            main: '#ed6c02',
            light: '#ff9800',
            dark: '#e65100',
            contrastText: '#ffffff',
        },

        // اطلاعات
        info: {
            main: '#0288d1',
            light: '#03a9f4',
            dark: '#01579b',
            contrastText: '#ffffff',
        },

        // پس‌زمینه‌ها
        background: {
            default: '#edecec',
            paper: '#ffffff',
        },

        // رنگ متن
        text: {
            primary: '#111111',
            secondary: '#555555',
            disabled: '#999999',
        },

        // divider
        divider: '#e0e0e0',

        // اکشن‌ها
        action: {
            active: '#1976d2',
            hover: 'rgba(25, 118, 210, 0.08)',
            selected: 'rgba(25, 118, 210, 0.16)',
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    textTransform: 'none',
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },

        MuiBottomNavigation: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    borderTop: '1px solid #e0e0e0',
                },
            },
        },

        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    color: '#777777',

                    '&.Mui-selected': {
                        color: '#1976d2',
                    },
                },
            },
        },

        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    color: '#111111',
                    boxShadow: 'none',
                    borderBottom: '1px solid #e0e0e0',
                },
            },
        },
    },
})

export const cache = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

