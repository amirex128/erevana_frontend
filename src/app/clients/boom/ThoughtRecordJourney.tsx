// components/ThoughtRecordJourney.tsx
'use client';

import React from 'react';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Box,
    Container,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
    Typography,
    Paper,
    Stack,
    LinearProgress,
    Alert,
    Avatar,
    Chip,
} from '@mui/material';
import {
    Backpack,
    FavoriteBorder,
    Cloud,
    Search,
    Balance,
    Lightbulb,
    CheckCircle,
} from '@mui/icons-material';
import { thoughtRecordSchema, ThoughtRecordFormData, Step } from './thought-record';

// ─── FIX 1: Import unused icons removed (Close, Stepper, MuiStep, StepLabel) ───

const steps: Step[] = [
    {
        id: 'situation',
        title: 'موقعیت',
        description: 'وضعیتی که در هفته گذشته برایتان رخ داده و باعث احساس ناراحتی یا اضطراب شده را توضیح دهید. کجا بودید؟ چه اتفاقی افتاد؟',
        placeholder: 'مثال: دیروز در جلسه کاری، مدیرم نظر من را نپذیرفت...',
        icon: 'backpack',
        color: '#FF9B85',
        tip: 'سعی کنید موقعیت را واقع‌بینانه و بدون قضاوت توصیف کنید.',
    },
    {
        id: 'emotions',
        title: 'احساسات',
        description: 'چه احساسی داشتید؟ شدت این احساس را از ۱ تا ۱۰ چقدر ارزیابی می‌کنید؟',
        placeholder: 'مثال: ناامیدی (۸/۱۰)، عصبانیت (۶/۱۰)...',
        icon: 'heart',
        color: '#FFB4A8',
        tip: 'می‌توانید چند احساس مختلف را نام ببرید. احساسات درست یا غلط نیستند.',
    },
    {
        id: 'automaticThoughts',
        title: 'افکار خودآیند',
        description: 'چه افکاری به ذهنتان رسید؟ در آن لحظه چه چیزی به خودتان گفتید؟',
        placeholder: 'مثال: من هیچ‌وقت موفق نمی‌شوم، همه فکر می‌کنند من ضعیف هستم...',
        icon: 'cloud',
        color: '#B8A4E8',
        tip: 'افکار درست یا غلط نیستند. فقط آنچه به ذهنتان آمده را بنویسید.',
    },
    {
        id: 'evidenceFor',
        title: 'شواهد موافق',
        description: 'چه شواهدی وجود دارد که از افکار شما حمایت می‌کند؟ چه چیزی باعث شده این‌طور فکر کنید؟',
        placeholder: 'مثال: این سومین باری است که پیشنهادم رد می‌شود...',
        icon: 'search',
        color: '#7EC8A3',
        tip: 'به دنبال واقعیت‌ها باشید، نه تفسیرها.',
    },
    {
        id: 'evidenceAgainst',
        title: 'شواهد مخالف',
        description: 'چه شواهدی وجود دارد که افکار شما را زیر سوال می‌برد؟ چه چیزهایی با این افکار مخالف است؟',
        placeholder: 'مثال: ماه گذشته پروژه‌ام تحسین شد، همکارانم از من کمک می‌خواهند...',
        icon: 'balance',
        color: '#F4C95D',
        tip: 'گاهی سخت است شواهد مخالف را ببینیم، اما آن‌ها وجود دارند.',
    },
    {
        id: 'balancedThought',
        title: 'افکار متعادل',
        description: 'با توجه به شواهد موافق و مخالف، چه فکر متعادل‌تری می‌توانید جایگزین کنید؟',
        placeholder: 'مثال: گاهی پیشنهادهایم پذیرفته نمی‌شود، اما این به معنای شکست کامل نیست...',
        icon: 'lightbulb',
        color: '#A8D5BA',
        tip: 'فکر متعادل واقع‌بینانه است، نه لزوماً مثبت یا منفی.',
    },
];

// ─── FIX 2: Return type changed from JSX.Element to React.ReactElement ───
const getIcon = (iconName: string): React.ReactElement => {
    const icons: Record<string, React.ReactElement> = {
        backpack: <Backpack />,
        heart: <FavoriteBorder />,
        cloud: <Cloud />,
        search: <Search />,
        balance: <Balance />,
        lightbulb: <Lightbulb />,
    };
    return icons[iconName] ?? <Lightbulb />;
};

export default function ThoughtRecordJourney() {
    const [openDialog, setOpenDialog] = useState(false);
    const [currentStep, setCurrentStep] = useState<Step | null>(null);
    const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

    const {
        control,
        handleSubmit,
        watch,
        // ─── FIX 3: Added `trigger` for per-step field validation ───
        trigger,
        formState: { errors },
    } = useForm<ThoughtRecordFormData>({
        resolver: zodResolver(thoughtRecordSchema),
        mode: 'onChange',
    });

    const formValues = watch();
    const progress = (completedSteps.size / steps.length) * 100;

    const handleStepClick = (step: Step) => {
        setCurrentStep(step);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setCurrentStep(null);
    };

    // ─── FIX 4: Core bug fixed — was using handleSubmit() which validates ALL
    //     fields at once, causing saves to silently fail for incomplete steps.
    //     Now uses trigger(fieldName) to validate only the current step's field. ───
    const handleStepSave = async () => {
        if (!currentStep) return;

        const isValid = await trigger(currentStep.id);
        if (isValid) {
            setCompletedSteps((prev) => new Set(prev).add(currentStep.id));
            handleCloseDialog();
        }
    };

    const onSubmit = (data: ThoughtRecordFormData) => {
        console.log('Form submitted:', data);
        // ارسال به API
    };

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                    ثبت افکار 🍃
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    افکار ناخوشایند را به چالش بکشید و وضوح درونی بسازید
                </Typography>
            </Box>

            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    mb: 4,
                    bgcolor: 'primary.50',
                    borderRadius: 3,
                }}
            >
                <Stack direction="row" spacing={2}  sx={{ mb: 2,alignItems:"center" }}>
                    <Typography variant="body2" sx={{fontWeight:600}}>
                        پیشرفت شما
                    </Typography>
                    <Chip
                        label={`${completedSteps.size} از ${steps.length} مرحله`}
                        size="small"
                        color="primary"
                    />
                </Stack>
                <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{ height: 8, borderRadius: 4 }}
                />
            </Paper>

            <Box
                sx={{
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        bottom: 0,
                        width: 3,
                        bgcolor: 'divider',
                        transform: 'translateX(-50%)',
                        zIndex: 0,
                        display: { xs: 'none', sm: 'block' },
                    },
                }}
            >
                <Stack spacing={3}>
                    {steps.map((step, index) => {
                        const isCompleted = completedSteps.has(step.id);
                        const isLeft = index % 2 === 0;

                        return (
                            <Box
                                key={step.id}
                                sx={{
                                    display: 'flex',
                                    justifyContent: { xs: 'center', sm: isLeft ? 'flex-start' : 'flex-end' },
                                    position: 'relative',
                                }}
                            >
                                <Paper
                                    elevation={isCompleted ? 4 : 1}
                                    onClick={() => handleStepClick(step)}
                                    sx={{
                                        p: 3,
                                        width: { xs: '100%', sm: '45%' },
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        border: isCompleted ? 2 : 0,
                                        borderColor: step.color,
                                        position: 'relative',
                                        zIndex: 1,
                                        '&:hover': {
                                            transform: 'scale(1.03)',
                                            boxShadow: 6,
                                        },
                                    }}
                                >
                                    <Stack direction="row" spacing={2} sx={{alignItems:"center"}}>
                                        <Avatar
                                            sx={{
                                                bgcolor: step.color,
                                                width: 56,
                                                height: 56,
                                            }}
                                        >
                                            {isCompleted ? <CheckCircle /> : getIcon(step.icon)}
                                        </Avatar>
                                        <Box sx={{flex:1}}>
                                            <Stack direction="row" spacing={1} sx={{ mb: 0.5, alignItems:"center" }}>
                                                <Chip
                                                    label={index + 1}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: step.color,
                                                        color: 'white',
                                                        fontWeight: 700,
                                                    }}
                                                />
                                                <Typography variant="h6" sx={{fontWeight:"700"}}>
                                                    {step.title}
                                                </Typography>
                                            </Stack>
                                            <Typography variant="body2" color="text.secondary">
                                                {step.description.substring(0, 60)}...
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Paper>
                            </Box>
                        );
                    })}
                </Stack>
            </Box>

            {completedSteps.size === steps.length && (
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={handleSubmit(onSubmit)}
                        sx={{
                            py: 1.5,
                            px: 4,
                            borderRadius: 3,
                            fontSize: '1.1rem',
                        }}
                    >
                        ذخیره و ارسال به درمانگر
                    </Button>
                </Box>
            )}

            <Dialog
                open={openDialog}
                onClose={(_event, reason) => {
                    // ─── FIX 5: `event` param renamed to `_event` to avoid
                    //     unused variable warning ───
                    if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
                        handleCloseDialog();
                    }
                }}
                maxWidth="sm"
                fullWidth
                    sx={{ borderRadius: 3 }}

            >
                {currentStep && (
                    <>
                        <DialogTitle>
                            <Stack direction="row" sx={{justifyContent:"space-between", alignItems:"center"}}>
                                <Stack direction="row" spacing={2} sx={{alignItems:"center"}} >
                                    <Avatar sx={{ bgcolor: currentStep.color }}>
                                        {getIcon(currentStep.icon)}
                                    </Avatar>
                                    <Box>
                                        <Typography variant="h6" sx={{fontWeight:"700"}}>
                                            {currentStep.title}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            مرحله {steps.findIndex((s) => s.id === currentStep.id) + 1} از {steps.length}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Stack>
                        </DialogTitle>

                        <DialogContent>
                            <Stack spacing={3}>
                                <Typography variant="body2" color="text.secondary">
                                    {currentStep.description}
                                </Typography>

                                <Controller
                                    name={currentStep.id}
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            multiline
                                            rows={6}
                                            fullWidth
                                            placeholder={currentStep.placeholder}
                                            error={!!errors[currentStep.id]}
                                            helperText={errors[currentStep.id]?.message}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2,
                                                },
                                            }}
                                        />
                                    )}
                                />

                                <Alert severity="info" icon={<Lightbulb />} sx={{ borderRadius: 2 }}>
                                    <Typography variant="body2">{currentStep.tip}</Typography>
                                </Alert>

                                {/* ─── FIX 4 (continued): Button now calls handleStepSave
                                    instead of handleSubmit(handleStepSubmit) ─── */}
                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    onClick={handleStepSave}
                                    disabled={!formValues[currentStep.id] || !!errors[currentStep.id]}
                                    sx={{
                                        py: 1.5,
                                        borderRadius: 2,
                                        bgcolor: currentStep.color,
                                        '&:hover': {
                                            bgcolor: currentStep.color,
                                            filter: 'brightness(0.9)',
                                        },
                                    }}
                                >
                                    ذخیره و ادامه
                                </Button>
                            </Stack>
                        </DialogContent>
                    </>
                )}
            </Dialog>
        </Container>
    );
}