import { createTheme } from '@mui/material/styles'
import createCache from "@emotion/cache";
import { prefixer } from 'stylis';
import rtlPlugin from '@mui/stylis-plugin-rtl';

export const theme = createTheme({
    direction: 'rtl',

    shape: {
        borderRadius: 14,
    },

    typography: {
        fontFamily: 'var(--font-iransansx)',

        h1: {
            fontWeight: 800,
        },

        h2: {
            fontWeight: 700,
        },

        h3: {
            fontWeight: 700,
        },

        button: {
            fontWeight: 600,
        },
    },

    palette: {
        mode: 'light',

        primary: {
            main: '#06b6d4',
            light: '#67e8f9',
            dark: '#0891b2',
            contrastText: '#ffffff',
        },

        secondary: {
            main: '#334155',
            light: '#64748b',
            dark: '#1e293b',
            contrastText: '#ffffff',
        },

        success: {
            main: '#10b981',
            light: '#6ee7b7',
            dark: '#059669',
            contrastText: '#ffffff',
        },

        error: {
            main: '#ef4444',
            light: '#fca5a5',
            dark: '#dc2626',
            contrastText: '#ffffff',
        },

        warning: {
            main: '#f59e0b',
            light: '#fcd34d',
            dark: '#d97706',
            contrastText: '#ffffff',
        },

        info: {
            main: '#0ea5e9',
            light: '#7dd3fc',
            dark: '#0284c7',
            contrastText: '#ffffff',
        },

        background: {
            default: '#f4f8fb',
            paper: '#ffffff',
        },

        text: {
            primary: '#0f172a',
            secondary: '#475569',
            disabled: '#94a3b8',
        },

        divider: 'rgba(15, 23, 42, 0.08)',

        action: {
            active: '#0891b2',

            hover: 'rgba(6, 182, 212, 0.08)',

            selected: 'rgba(6, 182, 212, 0.14)',

            disabled: 'rgba(15, 23, 42, 0.26)',

            disabledBackground: 'rgba(15, 23, 42, 0.08)',
        },
    },

    components: {

        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#f4f8fb',
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 14,
                    textTransform: 'none',
                    fontWeight: 700,
                    boxShadow: 'none',

                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    border: '1px solid rgba(15, 23, 42, 0.06)',
                    boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
                    backgroundImage: 'none',
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

        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(12px)',
                    color: '#0f172a',
                    boxShadow: 'none',
                    borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
                },
            },
        },

        MuiBottomNavigation: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    borderTop: '1px solid rgba(15, 23, 42, 0.06)',
                },
            },
        },

        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    color: '#64748b',

                    '&.Mui-selected': {
                        color: '#06b6d4',
                    },
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 14,

                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#06b6d4',
                    },

                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderWidth: 2,
                        borderColor: '#06b6d4',
                    },
                },
            },
        },

        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    fontWeight: 600,
                },
            },
        },
    },
})

export const cache = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});