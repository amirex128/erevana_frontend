import {createTheme, responsiveFontSizes} from '@mui/material/styles';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import rtlPlugin from '@mui/stylis-plugin-rtl';

const baseTheme = createTheme({

    // ====================== جهت چیدمان ======================
    // direction: جهت کلی صفحه - 'rtl' برای فارسی/عربی | 'ltr' برای انگلیسی
    direction: 'rtl',

    // ====================== فاصله‌گذاری ======================
    // spacing: واحد پایه فاصله‌گذاری به پیکسل - به عنوان ضریب استفاده می‌شود (مثلاً spacing(2) = 16px)
    spacing: 8,

    // ====================== نقاط شکست واکنش‌گرا ======================
    breakpoints: {
        values: {
            // xs: کوچک‌ترین اندازه (موبایل) - از 0 پیکسل
            xs: 0,
            // sm: موبایل بزرگ / تبلت کوچک - از 600 پیکسل
            sm: 600,
            // md: تبلت - از 900 پیکسل
            md: 900,
            // lg: دسکتاپ - از 1200 پیکسل
            lg: 1200,
            // xl: صفحات بزرگ - از 1536 پیکسل
            xl: 1536,
        },
    },

    // ====================== ترتیب لایه‌بندی (z-index) ======================
    zIndex: {
        // mobileStepper: ترتیب لایه برای استپر موبایل
        mobileStepper: 1000,
        // fab: ترتیب لایه برای دکمه اکشن شناور (FAB)
        fab: 1050,
        // speedDial: ترتیب لایه برای منوی سریع دایره‌ای (SpeedDial)
        speedDial: 1050,
        // appBar: ترتیب لایه برای نوار بالای صفحه
        appBar: 1100,
        // drawer: ترتیب لایه برای منوی کناری
        drawer: 1200,
        // modal: ترتیب لایه برای مودال و دیالوگ
        modal: 1300,
        // snackbar: ترتیب لایه برای نوتیفیکیشن‌های پایین صفحه
        snackbar: 1400,
        // tooltip: ترتیب لایه برای راهنمای ابزار
        tooltip: 1500,
    },

    // ====================== شکل و گوشه‌ها ======================
    shape: {
        // borderRadius: شعاع گوشه‌های پیش‌فرض تمام کامپوننت‌ها به پیکسل
        borderRadius: 12,
    },

    // ====================== میکسین‌ها ======================
    mixins: {
        toolbar: {
            // minHeight: حداقل ارتفاع نوار ابزار در حالت عادی
            minHeight: 56,
            // تنظیم ارتفاع نوار ابزار در landscape موبایل
            '@media (min-width:0px)': {
                '@media (orientation: landscape)': {
                    minHeight: 48,
                },
            },
            // تنظیم ارتفاع نوار ابزار در صفحات بزرگ‌تر از sm
            '@media (min-width:600px)': {
                minHeight: 64,
            },
        },
    },

    // ====================== سایه‌ها (۲۵ سطح) ======================
    // shadows: آرایه‌ای از ۲۵ سطح سایه - مینیمال و مدرن
    shadows: [
        'none',                                                                                              // 0 - بدون سایه
        '0 1px 2px 0 rgb(15 23 42 / 0.05)',                                                                  // 1 - سایه بسیار سبک
        '0 1px 3px 0 rgb(15 23 42 / 0.1), 0 1px 2px -1px rgb(15 23 42 / 0.1)',                              // 2
        '0 4px 6px -1px rgb(15 23 42 / 0.1), 0 2px 4px -2px rgb(15 23 42 / 0.1)',                           // 3
        '0 10px 15px -3px rgb(15 23 42 / 0.1), 0 4px 6px -4px rgb(15 23 42 / 0.1)',                         // 4
        '0 20px 25px -5px rgb(15 23 42 / 0.1), 0 8px 10px -6px rgb(15 23 42 / 0.1)',                        // 5
        '0 25px 50px -12px rgb(15 23 42 / 0.15)',                                                            // 6
        '0 25px 50px -12px rgb(15 23 42 / 0.18)',                                                            // 7
        '0 30px 60px -15px rgb(15 23 42 / 0.2)',                                                             // 8
        '0 35px 70px -18px rgb(15 23 42 / 0.22)',                                                            // 9
        '0 40px 80px -20px rgb(15 23 42 / 0.23)',                                                            // 10
        '0 45px 90px -22px rgb(15 23 42 / 0.24)',                                                            // 11
        '0 50px 100px -25px rgb(15 23 42 / 0.25)',                                                           // 12
        '0 55px 110px -25px rgb(15 23 42 / 0.26)',                                                           // 13
        '0 60px 120px -25px rgb(15 23 42 / 0.27)',                                                           // 14
        '0 65px 130px -25px rgb(15 23 42 / 0.28)',                                                           // 15
        '0 70px 140px -25px rgb(15 23 42 / 0.29)',                                                           // 16
        '0 75px 150px -25px rgb(15 23 42 / 0.3)',                                                            // 17
        '0 80px 160px -25px rgb(15 23 42 / 0.31)',                                                           // 18
        '0 85px 170px -25px rgb(15 23 42 / 0.32)',                                                           // 19
        '0 90px 180px -25px rgb(15 23 42 / 0.33)',                                                           // 20
        '0 95px 190px -25px rgb(15 23 42 / 0.34)',                                                           // 21
        '0 100px 200px -25px rgb(15 23 42 / 0.35)',                                                          // 22
        '0 105px 210px -25px rgb(15 23 42 / 0.36)',                                                          // 23
        '0 110px 220px -25px rgb(15 23 42 / 0.38)',                                                          // 24 - بیشترین سایه
    ] as const,

    // ====================== تایپوگرافی ======================
    typography: {
        // htmlFontSize: اندازه فونت پایه HTML - برای محاسبه rem استفاده می‌شود
        htmlFontSize: 16,

        // fontFamily: فونت پیش‌فرض کل برنامه
        fontFamily: 'var(--font-iransansx), "Helvetica Neue", Arial, sans-serif',

        // fontSize: اندازه پایه فونت به پیکسل (برای سیستم MUI)
        fontSize: 16,

        // fontWeightLight: وزن فونت سبک
        fontWeightLight: 300,

        // fontWeightRegular: وزن فونت عادی
        fontWeightRegular: 400,

        // fontWeightMedium: وزن فونت متوسط
        fontWeightMedium: 500,

        // fontWeightBold: وزن فونت ضخیم
        fontWeightBold: 700,

        // h1: تیتر سطح یک - بزرگترین تیتر صفحه
        h1: {
            fontFamily: 'var(--font-iransansx), "Helvetica Neue", Arial, sans-serif',
            fontSize: '2.5rem',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.015em',
        },

        // h2: تیتر سطح دو
        h2: {
            fontFamily: 'var(--font-iransansx), "Helvetica Neue", Arial, sans-serif',
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.01em',
        },

        // h3: تیتر سطح سه
        h3: {
            fontFamily: 'var(--font-iransansx), "Helvetica Neue", Arial, sans-serif',
            fontSize: '1.75rem',
            fontWeight: 700,
            lineHeight: 1.3,
            letterSpacing: '0em',
        },

        // h4: تیتر سطح چهار
        h4: {
            fontFamily: 'var(--font-iransansx), "Helvetica Neue", Arial, sans-serif',
            fontSize: '1.5rem',
            fontWeight: 700,
            lineHeight: 1.35,
            letterSpacing: '0em',
        },

        // h5: تیتر سطح پنج
        h5: {
            fontFamily: 'var(--font-iransansx), "Helvetica Neue", Arial, sans-serif',
            fontSize: '1.25rem',
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: '0em',
        },

        // h6: تیتر سطح شش - کوچک‌ترین تیتر
        h6: {
            fontFamily: 'var(--font-iransansx), "Helvetica Neue", Arial, sans-serif',
            fontSize: '1.1rem',
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: '0.0075em',
        },

        // subtitle1: زیرعنوان بزرگ - معمولاً زیر h5/h6 استفاده می‌شود
        subtitle1: {
            fontFamily: 'var(--font-iransansx), "Helvetica Neue", Arial, sans-serif',
            fontSize: '1.1rem',
            fontWeight: 500,
            lineHeight: 1.5,
            letterSpacing: '0.00938em',
        },

        // subtitle2: زیرعنوان کوچک
        subtitle2: {
            fontFamily: 'var(--font-iransansx), "Helvetica Neue", Arial, sans-serif',
            fontSize: '0.95rem',
            fontWeight: 500,
            lineHeight: 1.5,
            letterSpacing: '0.00714em',
        },

        // body1: متن اصلی بزرگ - برای محتوای اصلی صفحه
        body1: {
            fontFamily: 'var(--font-iransansx), "Helvetica Neue", Arial, sans-serif',
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.7,
            letterSpacing: '0.00938em',
        },

        // body2: متن اصلی کوچک - برای توضیحات و متن‌های فرعی
        body2: {
            fontFamily: 'var(--font-iransansx), "Helvetica Neue", Arial, sans-serif',
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: '0.01071em',
        },

        // button: استایل پیش‌فرض متن دکمه‌ها
        button: {
            fontFamily: 'var(--font-iransansx), "Helvetica Neue", Arial, sans-serif',
            fontWeight: 600,
            fontSize: '0.875rem',
            lineHeight: 1.75,
            letterSpacing: '0.02em',
            textTransform: 'none',
        },

        // caption: متن بسیار کوچک - برای توضیحات زیر تصویر یا لیبل‌های ریز
        caption: {
            fontFamily: 'var(--font-iransansx), "Helvetica Neue", Arial, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '0.03333em',
        },

        // overline: متن کوچک با حروف بزرگ - برای لیبل‌های دسته‌بندی
        overline: {
            fontFamily: 'var(--font-iransansx), "Helvetica Neue", Arial, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 500,
            lineHeight: 2.66,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
        },

    },

    // ====================== پالت رنگ‌ها ======================
    palette: {
        // mode: حالت تم - 'light' روشن | 'dark' تاریک
        mode: 'light',

        // common: رنگ‌های مشترک پایه
        common: {
            // black: رنگ سیاه خالص
            black: '#000',
            // white: رنگ سفید خالص
            white: '#fff',
        },

        // primary: رنگ اصلی برنامه - برای دکمه‌ها، لینک‌ها و اکشن‌های اصلی
        primary: {
            main: '#06b6d4',        // رنگ اصلی (Cyan 500)
            light: '#67e8f9',       // نسخه روشن‌تر
            dark: '#0891b2',        // نسخه تیره‌تر
            contrastText: '#ffffff', // رنگ متن روی پس‌زمینه primary
        },

        // secondary: رنگ ثانویه - برای اکشن‌های فرعی و تأکید
        secondary: {
            main: '#64748b',        // رنگ اصلی (Slate 500)
            light: '#94a3b8',       // نسخه روشن‌تر
            dark: '#334155',        // نسخه تیره‌تر
            contrastText: '#ffffff', // رنگ متن روی پس‌زمینه secondary
        },

        // error: رنگ خطا - برای پیام‌های خطا و هشدارهای بحرانی
        error: {
            main: '#ef4444',        // رنگ اصلی (Red 500)
            light: '#f87171',       // نسخه روشن‌تر
            dark: '#dc2626',        // نسخه تیره‌تر
            contrastText: '#ffffff', // رنگ متن روی پس‌زمینه error
        },

        // warning: رنگ هشدار - برای اطلاعیه‌های احتیاطی
        warning: {
            main: '#f59e0b',        // رنگ اصلی (Amber 500)
            light: '#fbbf24',       // نسخه روشن‌تر
            dark: '#d97706',        // نسخه تیره‌تر
            contrastText: '#ffffff', // رنگ متن روی پس‌زمینه warning
        },

        // info: رنگ اطلاعات - برای پیام‌های راهنما و اطلاعاتی
        info: {
            main: '#0ea5e9',        // رنگ اصلی (Sky 500)
            light: '#38bdf8',       // نسخه روشن‌تر
            dark: '#0284c7',        // نسخه تیره‌تر
            contrastText: '#ffffff', // رنگ متن روی پس‌زمینه info
        },

        // success: رنگ موفقیت - برای پیام‌های تأیید و موفقیت‌آمیز
        success: {
            main: '#10b981',        // رنگ اصلی (Emerald 500)
            light: '#34d399',       // نسخه روشن‌تر
            dark: '#059669',        // نسخه تیره‌تر
            contrastText: '#ffffff', // رنگ متن روی پس‌زمینه success
        },

        // grey: مقیاس خاکستری کامل برای استفاده در سراسر برنامه
        grey: {
            50: '#f8fafc',   // روشن‌ترین - پس‌زمینه صفحه
            100: '#f1f5f9',  // پس‌زمینه‌های سبک
            200: '#e2e8f0',  // جداکننده‌های سبک
            300: '#cbd5e1',  // بوردرهای ظریف
            400: '#94a3b8',  // متن غیرفعال
            500: '#64748b',  // متن ثانویه
            600: '#475569',  // متن نیمه‌اصلی
            700: '#334155',  // متن تیره
            800: '#1e293b',  // متن بسیار تیره
            900: '#0f172a',  // تیره‌ترین - متن اصلی
            // A variants - نسخه‌های تأکیدی (Accent)
            A100: '#f1f5f9', // accent روشن
            A200: '#e2e8f0', // accent متوسط روشن
            A400: '#94a3b8', // accent متوسط
            A700: '#334155', // accent تیره
        },

        // contrastThreshold: آستانه تشخیص تضاد رنگ برای انتخاب خودکار رنگ متن
        // اگر نسبت تضاد بیشتر از این عدد باشد از متن تیره، در غیر اینصورت از متن روشن استفاده می‌شود
        contrastThreshold: 3,

        // tonalOffset: میزان روشن/تیره شدن خودکار رنگ‌ها برای ساخت light و dark
        tonalOffset: 0.2,

        // text: رنگ‌های متن در حالت‌های مختلف
        text: {
            primary: '#0f172a',   // رنگ متن اصلی
            secondary: '#475569', // رنگ متن ثانویه / توضیحی
            disabled: '#94a3b8',  // رنگ متن غیرفعال
        },

        // divider: رنگ خط جداکننده‌ها
        divider: 'rgba(15, 23, 42, 0.08)',

        // background: رنگ‌های پس‌زمینه
        background: {
            default: '#f8fafc', // پس‌زمینه کلی صفحه
            paper: '#ffffff',   // پس‌زمینه کارت‌ها و پنل‌ها
        },

        // action: رنگ‌های تعاملی برای حالت‌های مختلف کامپوننت‌ها
        action: {
            active: '#0891b2',                    // رنگ آیکون و اکشن‌های فعال
            hover: 'rgba(6, 182, 212, 0.08)',      // رنگ پس‌زمینه هنگام hover
            hoverOpacity: 0.08,                   // میزان شفافیت hover
            selected: 'rgba(6, 182, 212, 0.12)',   // رنگ پس‌زمینه آیتم انتخاب‌شده
            selectedOpacity: 0.12,                // میزان شفافیت حالت انتخاب
            disabled: 'rgba(15, 23, 42, 0.26)',    // رنگ کامپوننت غیرفعال
            disabledBackground: 'rgba(15, 23, 42, 0.08)', // پس‌زمینه کامپوننت غیرفعال
            disabledOpacity: 0.38,                // میزان شفافیت حالت غیرفعال
            focus: 'rgba(6, 182, 212, 0.12)',      // رنگ outline هنگام focus
            focusOpacity: 0.12,                   // میزان شفافیت حالت focus
            activatedOpacity: 0.12,               // میزان شفافیت حالت فعال‌سازی (مثل ripple)
        },
    },

    // ====================== انیمیشن و گذار ======================
    transitions: {
        // easing: توابع easing برای انیمیشن‌های مختلف
        easing: {
            // easeInOut: برای عناصری که در وسط صفحه هستند - نرم‌ترین حالت
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            // easeOut: برای عناصری که وارد صفحه می‌شوند - شروع سریع، پایان آرام
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            // easeIn: برای عناصری که از صفحه خارج می‌شوند - شروع آرام، پایان سریع
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            // sharp: برای عناصری که می‌توانند سریعاً بسته/باز شوند
            sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
        // duration: مدت زمان انیمیشن‌ها به میلی‌ثانیه
        duration: {
            shortest: 150,      // کوتاه‌ترین - برای تغییرات ظریف
            shorter: 200,       // کوتاه‌تر - برای تغییرات سریع
            short: 250,         // کوتاه - برای اکثر تغییرات ساده
            standard: 300,      // استاندارد - پیش‌فرض اکثر انیمیشن‌ها
            complex: 375,       // پیچیده - برای انیمیشن‌های چندمرحله‌ای
            enteringScreen: 225, // ورود به صفحه
            leavingScreen: 195,  // خروج از صفحه
        },
    },

    // ====================== کامپوننت‌ها ======================
    components: {

        // ==================== استایل پایه ====================

        // MuiCssBaseline: ریست و استایل پایه برای کل DOM
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#f8fafc',
                    // فعال‌سازی ویژگی OpenType ss01 برای فونت‌های فارسی
                    fontFeatureSettings: '"ss01"',
                },
            },
        },

        // ==================== دکمه‌ها ====================

        // MuiButton: دکمه اصلی
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',   // جلوگیری از تبدیل متن به حروف بزرگ
                    fontWeight: 600,
                    borderRadius: 10,
                    boxShadow: 'none',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        boxShadow: '0 4px 12px rgba(6, 182, 212, 0.2)',
                    },
                },
                // استایل دکمه‌های filled
                contained: {
                    '&:hover': {
                        boxShadow: '0 6px 16px rgba(6, 182, 212, 0.25)',
                    },
                },
                // استایل دکمه‌های outlined - بوردر کمی ضخیم‌تر
                outlined: {
                    borderWidth: '1.5px',
                },
                // دکمه‌های کوچک
                sizeSmall: {
                    borderRadius: 8,
                    padding: '4px 12px',
                },
            },
        },

        // MuiIconButton: دکمه آیکون
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    '&:hover': {
                        backgroundColor: 'rgba(6, 182, 212, 0.08)',
                    },
                },
            },
        },

        // MuiFab: دکمه اکشن شناور (Floating Action Button)
        MuiFab: {
            styleOverrides: {
                root: {
                    boxShadow: '0 4px 20px rgba(6, 182, 212, 0.25)',
                    '&:hover': {
                        boxShadow: '0 8px 25px rgba(6, 182, 212, 0.3)',
                    },
                },
            },
        },

        // MuiButtonGroup: گروه دکمه‌ها
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    boxShadow: 'none',
                },
            },
        },

        // MuiToggleButton: دکمه toggle
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 500,
                    borderRadius: 8,
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(6, 182, 212, 0.12)',
                        color: '#06b6d4',
                    },
                },
            },
        },

        // ==================== سطح و ظرف‌ها ====================

        // MuiCard: کارت
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    border: '1px solid rgba(15, 23, 42, 0.06)',
                    boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)',
                    backgroundImage: 'none', // حذف گرادیان پیش‌فرض MUI
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
                        transform: 'translateY(-2px)',
                    },
                },
            },
        },

        // MuiCardContent: محتوای داخل کارت
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '20px',
                    '&:last-child': {
                        paddingBottom: '20px',
                    },
                },
            },
        },

        // MuiCardActions: اکشن‌های پایین کارت
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: '12px 20px',
                },
            },
        },

        // MuiCardHeader: سربرگ کارت
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: '20px 20px 0',
                },
                title: {
                    fontWeight: 600,
                    fontSize: '1rem',
                },
            },
        },

        // MuiPaper: کامپوننت پایه سطح (زیربنای کارت، دیالوگ و...)
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none', // حذف گرادیان پیش‌فرض
                    borderRadius: 14,
                },
                // نسخه بدون سایه
                outlined: {
                    border: '1px solid rgba(15, 23, 42, 0.1)',
                },
            },
        },

        // MuiAppBar: نوار بالای صفحه (Header)
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(12px)', // افکت شیشه‌ای
                    boxShadow: 'none',
                    borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
                    color: '#0f172a',
                },
            },
        },

        // MuiToolbar: نوار ابزار داخل AppBar
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: '64px !important',
                    padding: '0 24px',
                },
            },
        },

        // MuiDrawer: منوی کناری
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    // گوشه‌های گرد فقط برای سمت باز شدن
                    borderRadius: '0 16px 16px 0',
                    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.12)',
                },
            },
        },

        // MuiContainer: کانتینر اصلی محتوا
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: '24px',
                    paddingRight: '24px',
                },
            },
        },

        // MuiAccordion: آکاردئون
        MuiAccordion: {
            styleOverrides: {
                root: {
                    borderRadius: '12px !important',
                    border: '1px solid rgba(15, 23, 42, 0.08)',
                    boxShadow: 'none',
                    '&:before': {
                        display: 'none', // حذف خط جداکننده پیش‌فرض
                    },
                    '&.Mui-expanded': {
                        margin: '8px 0',
                    },
                },
            },
        },

        // MuiAccordionSummary: سربرگ آکاردئون
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    fontWeight: 600,
                    '&.Mui-expanded': {
                        borderRadius: '12px 12px 0 0',
                    },
                },
            },
        },

        // ==================== فرم و ورودی‌ها ====================

        // MuiTextField: فیلد متنی
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                size: 'medium',
            },
        },

        // MuiOutlinedInput: ورودی با بوردر
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    // تغییر رنگ بوردر هنگام hover
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#06b6d4',
                    },
                    // تغییر رنگ بوردر هنگام focus
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderWidth: '2px',
                        borderColor: '#06b6d4',
                    },
                },
                input: {
                    padding: '14px 16px',
                },
            },
        },

        // MuiFilledInput: ورودی با پس‌زمینه رنگی
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderRadius: '10px 10px 0 0',
                    backgroundColor: 'rgba(15, 23, 42, 0.04)',
                    '&:hover': {
                        backgroundColor: 'rgba(15, 23, 42, 0.06)',
                    },
                    '&.Mui-focused': {
                        backgroundColor: 'rgba(6, 182, 212, 0.04)',
                    },
                },
            },
        },

        // MuiInputLabel: لیبل فیلد ورودی
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    '&.Mui-focused': {
                        color: '#06b6d4',
                    },
                },
            },
        },

        // MuiInputBase: پایه ورودی (زیربنای تمام ورودی‌ها)
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontSize: '0.95rem',
                },
            },
        },

        // MuiFormHelperText: متن راهنمای زیر فیلد
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginTop: 6,
                    fontSize: '0.8rem',
                },
            },
        },

        // MuiFormLabel: لیبل فرم
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    '&.Mui-focused': {
                        color: '#06b6d4',
                    },
                },
            },
        },

        // MuiSelect: منوی انتخاب (Dropdown)
        MuiSelect: {
            styleOverrides: {
                outlined: {
                    borderRadius: 10,
                },
            },
        },

        // MuiAutocomplete: جستجو با پیشنهاد خودکار
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    borderRadius: 12,
                    boxShadow: '0 10px 15px -3px rgb(15 23 42 / 0.1)',
                    border: '1px solid rgba(15, 23, 42, 0.06)',
                },
                option: {
                    borderRadius: 8,
                    margin: '2px 8px',
                    '&:hover': {
                        backgroundColor: 'rgba(6, 182, 212, 0.08)',
                    },
                    '&[aria-selected="true"]': {
                        backgroundColor: 'rgba(6, 182, 212, 0.12)',
                    },
                },
            },
        },

        // MuiCheckbox: چک‌باکس
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    '&.Mui-checked': {
                        color: '#06b6d4',
                    },
                },
            },
        },

        // MuiRadio: دکمه رادیو
        MuiRadio: {
            styleOverrides: {
                root: {
                    '&.Mui-checked': {
                        color: '#06b6d4',
                    },
                },
            },
        },

        // MuiSwitch: کلید toggle
        MuiSwitch: {
            styleOverrides: {
                root: {
                    padding: 8,
                },
                track: {
                    borderRadius: 22 / 2,
                    backgroundColor: '#94a3b8',
                },
                thumb: {
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                },
                switchBase: {
                    '&.Mui-checked': {
                        '& + .MuiSwitch-track': {
                            backgroundColor: '#06b6d4',
                            opacity: 1,
                        },
                    },
                },
            },
        },

        // MuiSlider: اسلایدر
        MuiSlider: {
            styleOverrides: {
                root: {
                    color: '#06b6d4',
                    height: 6,
                },
                thumb: {
                    width: 20,
                    height: 20,
                    '&:hover': {
                        boxShadow: '0 0 0 8px rgba(6, 182, 212, 0.16)',
                    },
                    '&.Mui-focusVisible': {
                        boxShadow: '0 0 0 8px rgba(6, 182, 212, 0.16)',
                    },
                },
                track: {
                    borderRadius: 3,
                },
                rail: {
                    borderRadius: 3,
                    backgroundColor: '#e2e8f0',
                },
            },
        },

        // MuiRating: ستاره‌گذاری
        MuiRating: {
            styleOverrides: {
                iconFilled: {
                    color: '#f59e0b', // رنگ ستاره‌های پر
                },
                iconEmpty: {
                    color: '#e2e8f0', // رنگ ستاره‌های خالی
                },
            },
        },

        // ==================== نمایش داده ====================

        // MuiChip: تگ / برچسب
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    borderRadius: 8,
                    fontSize: '0.85rem',
                },
                // نسخه outlined با بوردر کمی ضخیم‌تر
                outlined: {
                    borderWidth: '1.5px',
                },
            },
        },

        // MuiAvatar: آواتار / تصویر پروفایل
        MuiAvatar: {
            styleOverrides: {
                root: {
                    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.1)',
                    fontWeight: 600,
                },
            },
        },

        // MuiAvatarGroup: گروه آواتارها
        MuiAvatarGroup: {
            styleOverrides: {
                avatar: {
                    border: '2px solid #ffffff',
                    fontSize: '0.85rem',
                },
            },
        },

        // MuiBadge: نشان / اعلان روی آیکون
        MuiBadge: {
            styleOverrides: {
                badge: {
                    fontWeight: 700,
                    fontSize: '0.7rem',
                    minWidth: 20,
                    height: 20,
                    borderRadius: 10,
                    padding: '0 5px',
                },
            },
        },

        // MuiTooltip: راهنمای ابزار
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: '#1e2937',
                    fontSize: '0.8rem',
                    borderRadius: 8,
                    padding: '6px 12px',
                    fontWeight: 500,
                },
                arrow: {
                    color: '#1e2937',
                },
            },
        },

        // MuiTypography: تایپوگرافی
        MuiTypography: {
            styleOverrides: {
                root: {
                    // اطمینان از وراثت صحیح فونت
                },
            },
        },

        // MuiIcon: آیکون
        MuiIcon: {
            styleOverrides: {
                root: {
                    fontSize: '1.25rem',
                },
            },
        },

        // MuiSvgIcon: آیکون SVG
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: '1.25rem',
                },
            },
        },

        // ==================== جداول ====================

        // MuiTable: جدول
        MuiTable: {
            styleOverrides: {
                root: {
                    borderCollapse: 'separate',
                    borderSpacing: 0,
                },
            },
        },

        // MuiTableCell: سلول جدول
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
                    padding: '14px 16px',
                    fontSize: '0.9rem',
                },
                // سلول سربرگ
                head: {
                    fontWeight: 600,
                    backgroundColor: '#f8fafc',
                    fontSize: '0.85rem',
                    color: '#475569',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                },
            },
        },

        // MuiTableRow: ردیف جدول
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: 'rgba(6, 182, 212, 0.04)',
                    },
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(6, 182, 212, 0.08)',
                    },
                },
            },
        },

        // MuiTablePagination: صفحه‌بندی جدول
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    fontSize: '0.85rem',
                },
                select: {
                    borderRadius: 8,
                },
            },
        },

        // MuiTableSortLabel: لیبل مرتب‌سازی ستون جدول
        MuiTableSortLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-active': {
                        color: '#06b6d4',
                    },
                    '&:hover': {
                        color: '#06b6d4',
                    },
                },
            },
        },

        // ==================== فیدبک و اعلان‌ها ====================

        // MuiDialog: دیالوگ / پنجره مودال
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: 20,
                    boxShadow: '0 25px 50px -12px rgb(15 23 42 / 0.25)',
                },
            },
        },

        // MuiDialogTitle: عنوان دیالوگ
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    padding: '24px 24px 16px',
                },
            },
        },

        // MuiDialogContent: محتوای دیالوگ
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: '8px 24px',
                },
            },
        },

        // MuiDialogActions: اکشن‌های پایین دیالوگ
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: '16px 24px 24px',
                    gap: 8,
                },
            },
        },

        // MuiSnackbar: نوتیفیکیشن پایین صفحه
        MuiSnackbar: {
            styleOverrides: {
                root: {
                    bottom: '24px',
                },
            },
        },

        // MuiSnackbarContent: محتوای اسنک‌بار
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 10px 25px rgba(15, 23, 42, 0.15)',
                },
            },
        },

        // MuiAlert: پیام هشدار / خطا / موفقیت / اطلاعات
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    fontWeight: 500,
                },
                // نسخه با پس‌زمینه رنگی - بوردر ظریف اضافه می‌کند
                filled: {
                    fontWeight: 600,
                },
                // نسخه outlined
                outlined: {
                    borderWidth: '1.5px',
                },
            },
        },

        // MuiAlertTitle: عنوان Alert
        MuiAlertTitle: {
            styleOverrides: {
                root: {
                    fontWeight: 700,
                    marginBottom: 4,
                },
            },
        },

        // MuiCircularProgress: نشانگر بارگذاری دایره‌ای
        MuiCircularProgress: {
            styleOverrides: {
                root: {
                    color: '#06b6d4',
                },
            },
        },

        // MuiLinearProgress: نشانگر بارگذاری خطی
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    backgroundColor: 'rgba(6, 182, 212, 0.15)',
                },
                bar: {
                    borderRadius: 4,
                    backgroundColor: '#06b6d4',
                },
            },
        },

        // MuiSkeleton: اسکلتون لودینگ
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    backgroundColor: 'rgba(15, 23, 42, 0.06)',
                },
            },
        },

        // ==================== ناوبری ====================

        // MuiTabs: تب‌ها
        MuiTabs: {
            styleOverrides: {
                // خط زیر تب فعال
                indicator: {
                    height: 3,
                    borderRadius: 3,
                    backgroundColor: '#06b6d4',
                },
                // خط زیر کل تب‌ها
                root: {
                    borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
                },
            },
        },

        // MuiTab: یک آیتم تب
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 600,
                    minHeight: 48,
                    fontSize: '0.9rem',
                    '&.Mui-selected': {
                        color: '#06b6d4',
                    },
                },
            },
        },

        // MuiMenu: منوی کشویی
        MuiMenu: {
            styleOverrides: {
                paper: {
                    borderRadius: 12,
                    boxShadow: '0 10px 15px -3px rgb(15 23 42 / 0.1)',
                    border: '1px solid rgba(15, 23, 42, 0.06)',
                    minWidth: 160,
                },
            },
        },

        // MuiMenuItem: آیتم منو
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    margin: '2px 8px',
                    padding: '8px 12px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    '&:hover': {
                        backgroundColor: 'rgba(6, 182, 212, 0.08)',
                    },
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(6, 182, 212, 0.12)',
                        '&:hover': {
                            backgroundColor: 'rgba(6, 182, 212, 0.16)',
                        },
                    },
                },
            },
        },

        // MuiList: لیست
        MuiList: {
            styleOverrides: {
                root: {
                    padding: '8px',
                },
            },
        },

        // MuiListItem: آیتم لیست
        MuiListItem: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                },
            },
        },

        // MuiListItemButton: آیتم لیست قابل کلیک
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    '&:hover': {
                        backgroundColor: 'rgba(6, 182, 212, 0.06)',
                    },
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(6, 182, 212, 0.1)',
                        '&:hover': {
                            backgroundColor: 'rgba(6, 182, 212, 0.12)',
                        },
                    },
                },
            },
        },

        // MuiListItemText: متن آیتم لیست
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontWeight: 500,
                    fontSize: '0.9rem',
                },
                secondary: {
                    fontSize: '0.8rem',
                },
            },
        },

        // MuiListItemIcon: آیکون آیتم لیست
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: 40,
                    color: '#64748b',
                },
            },
        },

        // MuiBreadcrumbs: مسیر ناوبری (Breadcrumb)
        MuiBreadcrumbs: {
            styleOverrides: {
                root: {
                    fontSize: '0.85rem',
                },
                separator: {
                    color: '#94a3b8',
                },
            },
        },

        // MuiPagination: صفحه‌بندی
        MuiPagination: {
            styleOverrides: {
                root: {},
            },
        },

        // MuiPaginationItem: آیتم صفحه‌بندی
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    fontWeight: 500,
                    '&.Mui-selected': {
                        backgroundColor: '#06b6d4',
                        color: '#ffffff',
                        '&:hover': {
                            backgroundColor: '#0891b2',
                        },
                    },
                },
            },
        },

        // MuiBottomNavigation: ناوبری پایین صفحه (موبایل)
        MuiBottomNavigation: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    borderTop: '1px solid rgba(15, 23, 42, 0.08)',
                    height: 64,
                },
            },
        },

        // MuiBottomNavigationAction: آیتم ناوبری پایین
        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: '#06b6d4',
                    },
                },
            },
        },

        // MuiSpeedDial: منوی سریع دایره‌ای
        MuiSpeedDial: {
            styleOverrides: {
                fab: {
                    boxShadow: '0 4px 20px rgba(6, 182, 212, 0.25)',
                },
            },
        },

        // MuiStepper: استپر مراحل
        MuiStepper: {
            styleOverrides: {
                root: {},
            },
        },

        // MuiStep: هر مرحله از استپر
        MuiStep: {
            styleOverrides: {
                root: {},
            },
        },

        // MuiStepLabel: لیبل مرحله استپر
        MuiStepLabel: {
            styleOverrides: {
                label: {
                    fontWeight: 500,
                    '&.Mui-active': {
                        fontWeight: 700,
                        color: '#06b6d4',
                    },
                    '&.Mui-completed': {
                        fontWeight: 600,
                        color: '#10b981',
                    },
                },
            },
        },

        // MuiStepIcon: آیکون مرحله استپر
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    '&.Mui-active': {
                        color: '#06b6d4',
                    },
                    '&.Mui-completed': {
                        color: '#10b981',
                    },
                },
            },
        },

        // MuiStepConnector: خط اتصال‌دهنده مراحل
        MuiStepConnector: {
            styleOverrides: {
                line: {
                    borderColor: 'rgba(15, 23, 42, 0.12)',
                },
            },
        },

        // ==================== سایر ====================

        // MuiDivider: خط جداکننده
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: 'rgba(15, 23, 42, 0.08)',
                },
            },
        },

        // MuiLink: لینک
        MuiLink: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    textDecorationColor: 'rgba(6, 182, 212, 0.4)',
                    '&:hover': {
                        color: '#0891b2',
                        textDecorationColor: '#0891b2',
                    },
                },
            },
        },

        // MuiImageList: شبکه تصاویر
        MuiImageList: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    overflow: 'hidden',
                },
            },
        },

        // MuiPopover: پنجره پاپ‌اور
        MuiPopover: {
            styleOverrides: {
                paper: {
                    borderRadius: 12,
                    boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.15)',
                    border: '1px solid rgba(15, 23, 42, 0.06)',
                },
            },
        },

        // MuiPopper: پاپر (برای منو، تولتیپ و...)
        MuiPopper: {
            defaultProps: {},
        },

        // MuiBackdrop: پس‌زمینه تاریک دیالوگ
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(15, 23, 42, 0.5)',
                    backdropFilter: 'blur(4px)',
                },
                // بدون افکت blur
                invisible: {
                    backgroundColor: 'transparent',
                    backdropFilter: 'none',
                },
            },
        },

        // MuiCollapse: اتساع/انقباض محتوا
        MuiCollapse: {
            defaultProps: {
                timeout: 200,
            },
        },

        // باعث میشه استک از فلکس باکس استفاده کنه
        MuiStack: {
            defaultProps: {
                useFlexGap: true,
            },
        },
    },
});

// responsiveFontSizes: اندازه فونت‌ها را بر اساس اندازه صفحه به صورت خودکار تنظیم می‌کند
export const theme = responsiveFontSizes(baseTheme);

// cache: تنظیمات Emotion برای پشتیبانی از RTL
// key: پیشوند کلاس‌های CSS
// stylisPlugins: پلاگین‌های پردازش CSS - prefixer برای vendor prefix و rtlPlugin برای تبدیل LTR به RTL
export const cache = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});