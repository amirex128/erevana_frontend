'use client';

import type { ReactNode } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
    Box,
    Container,
    Typography,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    FormHelperText,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    Radio,
    Checkbox,
    FormGroup,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
    Paper,
    Chip,
    Alert,
    Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// ─── Zod Schema ────────────────────────────────────────────────
const schema = z.object({
    // 1. Identifying Data
    fullName: z.string().min(2, 'نام و نام خانوادگی الزامی است'),
    age: z.string().min(1, 'سن الزامی است'),
    gender: z.enum(['male', 'female'], { message: 'جنسیت الزامی است' }),
    maritalStatus: z.string().min(1, 'وضعیت تاهل الزامی است'),
    occupation: z.string().optional(),
    religion: z.string().optional(),
    language: z.string().optional(),
    nationality: z.string().optional(),
    education: z.string().min(1, 'میزان تحصیلات الزامی است'),
    birthPlace: z.string().optional(),
    address: z.string().optional(),
    phone: z.string().optional(),

    // 2. Chief Complaint
    chiefComplaint: z.string().min(5, 'شکایت اصلی الزامی است (حداقل ۵ کاراکتر)'),

    // 3. HPI
    onset: z.string().optional(),
    duration: z.string().optional(),
    precipitatingFactors: z.string().optional(),
    symptoms: z.string().optional(),
    consequences: z.string().optional(),

    // 4. Past Illnesses
    psychiatricHistory: z.string().optional(),
    medicalHistory: z.string().optional(),
    substanceHistory: z.string().optional(),

    // 5. Family History
    familyHistory: z.string().optional(),

    // 6. Personal History
    prenatal: z.string().optional(),
    earlyChildhood: z.string().optional(),
    middleChildhood: z.string().optional(),
    lateChildhood: z.string().optional(),

    // Adulthood
    occupationalHistory: z.string().optional(),
    maritalHistory: z.string().optional(),
    militaryHistory: z.string().optional(),
    educationalHistory: z.string().optional(),
    socialActivity: z.string().optional(),
    currentLiving: z.string().optional(),
    legalHistory: z.string().optional(),
    sexualHistory: z.string().optional(),
    fantasies: z.string().optional(),
    values: z.string().optional(),

    // 7. MSE – General Description
    appearance: z.string().optional(),
    speechCharacteristics: z.string().optional(),
    attitudeToExaminer: z.string().optional(),
    psychomotorActivity: z.string().optional(),

    // MSE – Mood & Affect
    mood: z.string().optional(),
    affect: z.string().optional(),
    affectAppropriateness: z.enum(['appropriate', 'inappropriate', 'variable']).optional(),

    // MSE – Perceptions & Thinking
    perceptions: z.string().optional(),
    thoughtFormDisorders: z.array(z.string()).optional(),
    thoughtContent: z.string().optional(),

    // MSE – Sensorium & Cognition
    consciousness: z.string().optional(),
    orientation: z.array(z.string()).optional(),
    concentration: z.string().optional(),
    memory: z.string().optional(),
    abstractThought: z.string().optional(),

    // MSE – Impulse, Judgment, Insight
    impulseControl: z.enum(['intact', 'impaired', 'partially_impaired']).optional(),
    insight: z.string().optional(),
    judgment: z.string().optional(),
    reliability: z.string().optional(),

    // 8. Diagnosis
    axis1: z.string().optional(),
    axis2: z.string().optional(),
    axis3: z.string().optional(),
    axis4: z.string().optional(),
    axis5: z.string().optional(),

    // 9. Prognosis
    prognosis: z.string().optional(),

    // 10. Treatment Plan
    treatmentType: z.string().optional(),
    treatmentPlan: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

// ─── Helper: Section wrapper ────────────────────────────────────
function Section({
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
        <Accordion defaultExpanded={defaultExpanded} sx={{ mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Chip label={number} size="small" color="primary" />
                    <Box>
                        <Typography sx={{ fontWeight: 600 }}>{title}</Typography>
                        {subtitle && (
                            <Typography variant="caption" color="text.secondary">
                                {subtitle}
                            </Typography>
                        )}
                    </Box>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {children}
                </Box>
            </AccordionDetails>
        </Accordion>
    );
}

// ─── Helper: Sub-section label ──────────────────────────────────
function SubLabel({ label, hint }: { label?: string; hint?: string }) {
    return (
        <Box sx={{ mb: 0.5 }}>
            {label ? (
                <Typography variant="body2" sx={{ fontWeight: 600 }} color="text.primary">
                    {label}
                </Typography>
            ) : null}
            {hint && (
                <Typography variant="caption" color="text.secondary">
                    {hint}
                </Typography>
            )}
        </Box>
    );
}

// ─── Main Component ─────────────────────────────────────────────
export default function PsychiatricInterviewForm() {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            thoughtFormDisorders: [],
            orientation: [],
        },
    });

    const onSubmit = (data: FormData) => {
        console.log('📋 فرم مصاحبه بالینی – داده‌های نهایی:', data);
    };

    return (
        <Container maxWidth="md" sx={{ py: 4, direction: 'rtl' }}>
            {/* Header */}
            <Paper elevation={2} sx={{ p: 3, mb: 3, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    فرم مصاحبه بالینی
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.85, mt: 0.5 }}>
                    بر اساس خلاصه روان‌پزشکی کاپلان
                </Typography>
            </Paper>

            {isSubmitSuccessful && (
                <Alert severity="success" sx={{ mb: 2 }}>
                    فرم با موفقیت ثبت شد. داده‌ها در کنسول قابل مشاهده‌اند.
                </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>

                {/* ── 1. Identifying Data ── */}
                <Section number="۱" title="اطلاعات هویتی" subtitle="Identifying Data (ID)" defaultExpanded>
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
                        {/* Gender */}
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
                                    {errors.gender && <FormHelperText>{errors.gender.message}</FormHelperText>}
                                </FormControl>
                            )}
                        />
                        {/* Marital Status */}
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
                                    {errors.maritalStatus && <FormHelperText>{errors.maritalStatus.message}</FormHelperText>}
                                </FormControl>
                            )}
                        />
                        <Controller
                            name="occupation"
                            control={control}
                            render={({ field }) => (
                                <TextField {...field} label="شغل" fullWidth />
                            )}
                        />
                        <Controller
                            name="religion"
                            control={control}
                            render={({ field }) => (
                                <TextField {...field} label="مذهب" fullWidth />
                            )}
                        />
                        <Controller
                            name="language"
                            control={control}
                            render={({ field }) => (
                                <TextField {...field} label="زبان" fullWidth />
                            )}
                        />
                        <Controller
                            name="nationality"
                            control={control}
                            render={({ field }) => (
                                <TextField {...field} label="ملیت / نژاد" fullWidth />
                            )}
                        />
                        {/* Education */}
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
                                    {errors.education && <FormHelperText>{errors.education.message}</FormHelperText>}
                                </FormControl>
                            )}
                        />
                        <Controller
                            name="birthPlace"
                            control={control}
                            render={({ field }) => (
                                <TextField {...field} label="محل تولد" fullWidth />
                            )}
                        />
                    </Box>
                    <Controller
                        name="address"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} label="آدرس" fullWidth multiline rows={2} />
                        )}
                    />
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} label="شماره تلفن" fullWidth />
                        )}
                    />
                </Section>

                {/* ── 2. Chief Complaint ── */}
                <Section number="۲" title="شکایت اصلی" subtitle="Chief Complaint (CC)">
                    <Alert severity="info" icon={false}>
                        دقیقاً با کلمات خود بیمار، دلیل مراجعه یا آورده شدن او برای درمان ذکر می‌شود. توضیح بیمار هر قدر هم بی‌ربط و غیر عادی باشد، باید کلمه به کلمه ذکر شود.
                    </Alert>
                    <Controller
                        name="chiefComplaint"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label='مثال: "احساس افسردگی شدیدی می‌کردم و می‌خواستم خودم را بکشم"'
                                fullWidth
                                multiline
                                rows={3}
                                error={!!errors.chiefComplaint}
                                helperText={errors.chiefComplaint?.message}
                            />
                        )}
                    />
                </Section>

                {/* ── 3. HPI ── */}
                <Section number="۳" title="تاریخچه بیماری فعلی" subtitle="History of Present Illness (HPI)">
                    <SubLabel label="الف) شروع بیماری (Onset)" hint="چه زمانی شروع شد؟" />
                    <Controller
                        name="onset"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel label="ب) مدت بیماری (Duration & Course)" hint="چه مدت است که این علائم وجود دارد؟" />
                    <Controller
                        name="duration"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel label="ج) عوامل تسریع‌کننده (Precipitating Factors)" hint="چه رویدادی باعث بدتر شدن وضعیت شد؟" />
                    <Controller
                        name="precipitatingFactors"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel label="د) نشانگان (Symptoms)" hint="علائم بیمار چیست؟" />
                    <Controller
                        name="symptoms"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel label="ه) پیامدها (Consequences)" hint="این بیماری چه تأثیری بر زندگی بیمار داشته؟" />
                    <Controller
                        name="consequences"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />
                </Section>

                {/* ── 4. Past Illnesses ── */}
                <Section number="۴" title="بیماری‌های قبلی" subtitle="Past Illnesses (PI)">
                    <SubLabel
                        label="الف) روان‌پزشکی، روان‌شناسی (Psychiatric, Psychology)"
                        hint="علائم بیمار، وسعت ناتوانی، نوع درمان‌های به عمل آمده، نوع مدت بیماری، تأثیر درمان‌های قبلی و میزان رعایت درمان"
                    />
                    <Controller
                        name="psychiatricHistory"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel
                        label="ب) پزشکی (Medical)"
                        hint="بیماری‌های داخلی مهم، جراحی‌ها و ضربه‌های مهم خصوصاً آن‌هایی که مستلزم بستری شدن بودند"
                    />
                    <Controller
                        name="medicalHistory"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel
                        label="ج) تاریخچه مصرف الکل یا مواد دیگر (Alcohol & Other Substance History)"
                        hint="جزئیات مقدار و دفعات مصرف الکل و مواد دیگر"
                    />
                    <Controller
                        name="substanceHistory"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />
                        )}
                    />
                </Section>

                {/* ── 5. Family History ── */}
                <Section number="۵" title="تاریخچه خانوادگی" subtitle="Family History (FH)">
                    <Alert severity="info" icon={false}>
                        بیماری‌های روانی، درمان و بستری شدن بستگان درجه اول بیمار. سابقه مصرف الکل و مواد دیگر در اعضاء خانواده، رفتار ضد اجتماعی، شخصیت و هوش افراد خانواده.
                    </Alert>
                    <Controller
                        name="familyHistory"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={4} placeholder="توضیح دهید..." />
                        )}
                    />
                </Section>

                {/* ── 6. Personal History ── */}
                <Section number="۶" title="تاریخچه شخصی (شرح‌حال)" subtitle="Personal History / Anamnesis (PH)">
                    <SubLabel
                        label="پیش از تولد (Prenatal)"
                        hint="مشکلات حاملگی و زایمان مادر، نقص و آسیب هنگام تولد، وضعیت جسمانی و روانی مادر، مصرف مواد در دوران حاملگی، خواسته یا ناخواسته بودن بیمار"
                    />
                    <Controller
                        name="prenatal"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel
                        label="اوایل کودکی (Birth – ۳ سالگی)"
                        hint="عادات تغذیه‌ای، رشد اولیه (راه رفتن، حرف زدن، دندان درآوردن)، آموزش آداب تخلیه، علائم مشکلات رفتاری، شخصیت در زمان کودکی"
                    />
                    <Controller
                        name="earlyChildhood"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel
                        label="اواسط کودکی (۳ – ۱۱ سالگی)"
                        hint="هماندسازی جنسی، تنبیهات در منزل، تجارب اولیه مدرسه، دوستی‌های اولیه، سابقه یادگیری خواندن، رشد مهارت‌های هوشی و حرکتی، وجود کابوس‌ها و فوبیاها"
                    />
                    <Controller
                        name="middleChildhood"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel
                        label="اواخر کودکی / نوجوانی (پیش از بلوغ تا آخر نوجوانی)"
                        hint="روابط اجتماعی، سابقه تحصیلی، رشد شناختی، مسائل هیجانی و جسمی (استمنا، فرار از منزل، بزهکاری، مصرف دخانیات/الکل)، تمایلات جنسی"
                    />
                    <Controller
                        name="lateChildhood"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />
                        )}
                    />

                    <Divider sx={{ my: 1 }}>
                        <Chip label="بزرگسالی" size="small" />
                    </Divider>

                    <SubLabel
                        label="تاریخچه شغلی (Occupational History)"
                        hint="انتخاب شغل، تعارض‌های احتمالی مربوط به شغل، احساس بیمار در مورد شغل فعلی، روابط در محیط کار"
                    />
                    <Controller
                        name="occupationalHistory"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel
                        label="تاریخچه زناشویی و روابط (Marital & Relationship History)"
                        hint="سابقه ازدواج، روابط پیش از ازدواج، کیفیت روابط جنسی، زمینه‌های توافق یا تضاد"
                    />
                    <Controller
                        name="maritalHistory"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel label="تاریخچه سربازی (Military History)" hint="سابقه خدمت سربازی، شرکت در جنگ، آسیب‌دیدگی، نحوه ترخیص" />
                    <Controller
                        name="militaryHistory"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel label="تاریخچه تحصیلی (Educational History)" hint="سوابق تحصیلی بیمار برای تحقیق زمینه اجتماعی و فرهنگی، هوش، انگیزش و موانع پیشرفت" />
                    <Controller
                        name="educationalHistory"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel label="فعالیت‌های اجتماعی (Social Activity)" hint="ماهیت دوستی‌ها با تاکید بر عمق، نوع مدت و کیفیت، علایق اجتماعی، ذهنی و فیزیکی" />
                    <Controller
                        name="socialActivity"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel label="وضعیت زندگی فعلی (Current Living Situation)" hint="شرح محل زندگی، تعداد اعضای خانواده، مشکلات مالی" />
                    <Controller
                        name="currentLiving"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel label="تاریخچه قانونی (Legal History)" hint="سابقه توقیف، زندانی شدن، مجازات تعلیقی، در انتظار حکم" />
                    <Controller
                        name="legalHistory"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel
                        label="تاریخچه جنسی (Sexual History)"
                        hint="چگونگی فهمیدن روابط جنسی در کودکی، مواردی که مورد سوءاستفاده جنسی قرار گرفته، اختلالات جنسی (فقدان ارگاسم، ناتوانی جنسی، فقدان میل جنسی)"
                    />
                    <Controller
                        name="sexualHistory"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel label="خیالات و رویاها (Fantasies & Dreams)" hint="تخیلات و رویاها منابعی برای رسیدن به ناخودآگاه فرد هستند" />
                    <Controller
                        name="fantasies"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel label="ارزش‌ها (Values)" hint="سیستم ارزش‌های بیمار (اخلاقی و اجتماعی) از جمله ارزش‌های مربوط به کار، پول، کودکان، روابط جنسی، مسائل جامعه" />
                    <Controller
                        name="values"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />
                </Section>

                {/* ── 7. MSE ── */}
                <Section number="۷" title="بررسی وضعیت روانی" subtitle="Mental Status Examination (MSE)">

                    {/* General Description */}
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }} color="primary">الف) توصیف کلی (General Description)</Typography>

                    <SubLabel label="ظاهر (Appearance)" hint="وضع ظاهری و وضعیت فیزیکی کلی بیمار: سالم، مریض‌حال، معذب، موقر، پیرنما، جوان‌نما، ژولیده، کودک‌وار" />
                    <Controller
                        name="appearance"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel label="خصوصیات تکلم (Speech Characteristics)" hint="کمیت، سرعت و کیفیت تکلم. مثلاً: پرحرف، کم‌حرف، تند، کند، پرفشار، تردیدآمیز، یکنواخت، بلند، نجوایی" />
                    <Controller
                        name="speechCharacteristics"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel label="نگرش نسبت به معاینه‌کننده (Attitude Toward Examiner)" hint="توأم با همکاری، دوستانه، روراست، با اغواگری، دفاعی، تحقیرآمیز، بی‌حال، خصمانه، با شوخی" />
                    <Controller
                        name="attitudeToExaminer"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel label="رفتار آشکار و فعالیت روانی حرکتی (Overt Behavior & Psychomotor Activity)" hint="ادا و اطوار، تیک‌ها، حرکات بیانگر، پیچش‌های عضلانی، بیش‌فعالی، تهییج، ستیزه‌جویی، گره کردن دست" />
                    <Controller
                        name="psychomotorActivity"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />

                    <Divider />

                    {/* Mood & Affect */}
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }} color="primary">ب) خلق و عاطفه (Mood & Affect)</Typography>

                    <SubLabel label="خلق (Mood)" hint="هیجان پایدار و نافذ. با اشاره به شدت، عمق، نوع مدت و نوسانات" />
                    <Controller
                        name="mood"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth>
                                <InputLabel>خلق بیمار</InputLabel>
                                <Select {...field} value={field.value ?? ''} label="خلق بیمار">
                                    <MenuItem value="normal">طبیعی</MenuItem>
                                    <MenuItem value="depressed">افسرده</MenuItem>
                                    <MenuItem value="hopeless">ناامید</MenuItem>
                                    <MenuItem value="irritable">تحریک‌پذیر</MenuItem>
                                    <MenuItem value="anxious">مضطرب</MenuItem>
                                    <MenuItem value="angry">خشمگین</MenuItem>
                                    <MenuItem value="euphoric">شنگول / سرخوش</MenuItem>
                                    <MenuItem value="empty">تهی</MenuItem>
                                    <MenuItem value="guilty">توأم با احساس گناه</MenuItem>
                                    <MenuItem value="fearful">مرعوب / وحشت‌زده</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />

                    <SubLabel label="عاطفه (Affect)" hint="پاسخ‌دهی هیجانی فعلی بیمار" />
                    <Controller
                        name="affect"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth>
                                <InputLabel>عاطفه بیمار</InputLabel>
                                <Select {...field} value={field.value ?? ''} label="عاطفه بیمار">
                                    <MenuItem value="normal">به‌هنجار (Normal) – تفاوت در حالت چهره، لحن صدا، استفاده از دست‌ها</MenuItem>
                                    <MenuItem value="constricted">محدود (Constricted) – کاهش بارز در حدود و شدت هیجان</MenuItem>
                                    <MenuItem value="blunted">کند (Blunted) – کاهش جلوه هیجانی</MenuItem>
                                    <MenuItem value="flat">سطحی (Flat) – نشانه‌ای از جلوه هیجانی وجود ندارد</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />

                    <SubLabel label="تناسب عاطفه (Appropriateness of Affect)" hint="آیا پاسخ‌های هیجانی بیمار با موضوع مورد بحث تناسب دارد؟" />
                    <Controller
                        name="affectAppropriateness"
                        control={control}
                        render={({ field }) => (
                            <FormControl>
                                <RadioGroup row {...field} value={field.value ?? ''}>
                                    <FormControlLabel value="appropriate" control={<Radio />} label="مناسب" />
                                    <FormControlLabel value="inappropriate" control={<Radio />} label="نامناسب" />
                                    <FormControlLabel value="variable" control={<Radio />} label="متغیر" />
                                </RadioGroup>
                            </FormControl>
                        )}
                    />

                    <Divider />

                    {/* Perceptions */}
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }} color="primary">ج) ادراک (Perceptions)</Typography>
                    <SubLabel
                        hint="اختلالات ادراکی مانند هذیان و توهم. سیستم حسی درگیر (شنوایی، بینایی، بویایی، لمسی) و احساس مسخ شخصیت / مسخ واقعیت"
                    />
                    <Controller
                        name="perceptions"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />
                        )}
                    />

                    <Divider />

                    {/* Thinking */}
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }} color="primary">د) تفکر (Thinking)</Typography>

                    <SubLabel label="اختلالات شکل تفکر (Form / Process)" hint="یک یا چند مورد که مشاهده می‌شود را انتخاب کنید" />
                    <Controller
                        name="thoughtFormDisorders"
                        control={control}
                        render={({ field }) => {
                            const val: string[] = field.value ?? [];
                            const toggle = (v: string) =>
                                field.onChange(val.includes(v) ? val.filter((x) => x !== v) : [...val, v]);
                            return (
                                <FormGroup sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 0.5 }}>
                                    {[
                                        ['loosening', 'شل شدن تداعی‌ها / خروج از خط (Derailment)'],
                                        ['flight_of_ideas', 'پرش افکار (Flight of Ideas)'],
                                        ['tangentiality', 'تفکر مماسی (Tangentiality)'],
                                        ['circumstantiality', 'حاشیه‌پردازی (Circumstantiality)'],
                                        ['neologism', 'واژه‌سازی (Neologism)'],
                                        ['punning', 'جناس‌سازی (Punning)'],
                                        ['clang', 'تداعی صوتی (Clang Association)'],
                                        ['thought_blocking', 'انسداد فکر (Thought Blocking)'],
                                    ].map(([v, label]) => (
                                        <FormControlLabel
                                            key={v}
                                            control={<Checkbox checked={val.includes(v)} onChange={() => toggle(v)} size="small" />}
                                            label={<Typography variant="body2">{label}</Typography>}
                                        />
                                    ))}
                                </FormGroup>
                            );
                        }}
                    />

                    <SubLabel
                        label="محتوای تفکر (Content)"
                        hint="هذیان‌ها، مشغله‌های ذهنی، وسواس‌ها، اجبارها، هراس‌ها، افکار خودکشی یا دیگرکشی، نشانه‌های خود بیمارانگاری"
                    />
                    <Controller
                        name="thoughtContent"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />
                        )}
                    />

                    <Divider />

                    {/* Sensorium & Cognition */}
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }} color="primary">ه) نظام حسی و شناخت (Sensorium & Cognition)</Typography>

                    <SubLabel label="هوشیاری (Consciousness)" />
                    <Controller
                        name="consciousness"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth>
                                <InputLabel>سطح هوشیاری</InputLabel>
                                <Select {...field} value={field.value ?? ''} label="سطح هوشیاری">
                                    <MenuItem value="alert">هوشیاری کامل (Alertness)</MenuItem>
                                    <MenuItem value="clouding">تیرگی هوشیاری (Clouding)</MenuItem>
                                    <MenuItem value="somnolence">خواب‌آلودگی (Somnolence)</MenuItem>
                                    <MenuItem value="stupor">بهت (Stupor)</MenuItem>
                                    <MenuItem value="lethargy">بی‌حالی (Lethargy)</MenuItem>
                                    <MenuItem value="coma">اغما (Coma)</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />

                    <SubLabel label="جهت‌یابی (Orientation)" hint="موارد جهت‌یابی سالم را علامت بزنید" />
                    <Controller
                        name="orientation"
                        control={control}
                        render={({ field }) => {
                            const val: string[] = field.value ?? [];
                            const toggle = (v: string) =>
                                field.onChange(val.includes(v) ? val.filter((x) => x !== v) : [...val, v]);
                            return (
                                <FormGroup row>
                                    {[
                                        ['person', 'شخص (نام و هویت)'],
                                        ['place', 'مکان (کجاست؟)'],
                                        ['time', 'زمان (چه وقت است؟)'],
                                    ].map(([v, label]) => (
                                        <FormControlLabel
                                            key={v}
                                            control={<Checkbox checked={val.includes(v)} onChange={() => toggle(v)} />}
                                            label={label}
                                        />
                                    ))}
                                </FormGroup>
                            );
                        }}
                    />

                    <SubLabel label="تمرکز و توجه (Concentration & Attention)" hint="آزمون تفریق عدد ۷ از ۱۰۰، جدول ضرب، حروف الفبا به صورت معکوس، ماه‌های سال معکوس" />
                    <Controller
                        name="concentration"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="نتیجه ارزیابی را ثبت کنید..." />
                        )}
                    />

                    <SubLabel label="حافظه (Memory)" hint="فوری (فراخنای ارقام)، گذشته نزدیک (چند ماه گذشته)، نزدیک (چند روز گذشته)، بلندمدت (اطلاعات دوران کودکی)" />
                    <Controller
                        name="memory"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={3} placeholder="نتیجه ارزیابی را ثبت کنید..." />
                        )}
                    />

                    <SubLabel label="تفکر انتزاعی (Abstract Thought)" hint="توضیح شباهت‌ها و تفاوت‌ها (فرق سیب و گلابی)، معنی ضرب‌المثل‌ها (جوجه را آخر پاییز می‌شمارند)" />
                    <Controller
                        name="abstractThought"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="نتیجه ارزیابی را ثبت کنید..." />
                        )}
                    />

                    <Divider />

                    {/* Impulse Control */}
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }} color="primary">و) کنترل تکانه (Impulsivity)</Typography>
                    <SubLabel hint="آیا بیمار قادر است تکانه‌های جنسی، پرخاشگری یا انواع دیگر تکانه‌ها را کنترل نماید؟" />
                    <Controller
                        name="impulseControl"
                        control={control}
                        render={({ field }) => (
                            <FormControl>
                                <RadioGroup row {...field} value={field.value ?? ''}>
                                    <FormControlLabel value="intact" control={<Radio />} label="سالم" />
                                    <FormControlLabel value="partially_impaired" control={<Radio />} label="تا حدودی مختل" />
                                    <FormControlLabel value="impaired" control={<Radio />} label="مختل" />
                                </RadioGroup>
                            </FormControl>
                        )}
                    />

                    <Divider />

                    {/* Judgment & Insight */}
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }} color="primary">ز) قضاوت و بینش (Judgment & Insight)</Typography>

                    <SubLabel
                        label="بینش (Insight)"
                        hint="سطوح بینش: ۱-انکار کامل  ۲-آگاهی مختصر اما انکار  ۳-گناه را به دیگران نسبت دادن  ۴-آگاهی از چیزی نامعلوم  ۵-بینش عقلانی  ۶-بینش هیجانی واقعی"
                    />
                    <Controller
                        name="insight"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth>
                                <InputLabel>سطح بینش</InputLabel>
                                <Select {...field} value={field.value ?? ''} label="سطح بینش">
                                    <MenuItem value="1">۱ – انکار کامل بیماری</MenuItem>
                                    <MenuItem value="2">۲ – آگاهی مختصر از بیمار بودن اما انکار آن</MenuItem>
                                    <MenuItem value="3">۳ – آگاهی از بیماری اما گناه را به دیگران نسبت دادن</MenuItem>
                                    <MenuItem value="4">۴ – آگاهی از این که بیماری ناشی از چیزی نامعلوم در وجود بیمار است</MenuItem>
                                    <MenuItem value="5">۵ – بینش عقلانی (می‌پذیرد اما نمی‌تواند برای تغییر استفاده کند)</MenuItem>
                                    <MenuItem value="6">۶ – بینش هیجانی واقعی (موجب تغییر شخصیت می‌شود)</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />

                    <SubLabel label="قضاوت (Judgment)" hint="آیا بیمار تجربه احتمالی رفتار خود را می‌داند؟ آزمون قضاوت: اگر پاکت تمبردار و آدرس‌دار در خیابان پیدا کند چه می‌کند؟" />
                    <Controller
                        name="judgment"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />

                    <SubLabel label="قابلیت اعتماد (Reliability)" hint="برآورد روان‌شناس از میزان راستگویی و صداقت بیمار (مثلاً صراحتاً به مصرف مواد اعتراف کند)" />
                    <Controller
                        name="reliability"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={2} placeholder="توضیح دهید..." />
                        )}
                    />
                </Section>

                {/* ── 8. Diagnosis ── */}
                <Section number="۸" title="تشخیص" subtitle="Diagnosis">
                    {[
                        ['axis1', 'محور ۱: اختلال بالینی (Clinical Syndromes)'],
                        ['axis2', 'محور ۲: اختلال شخصیت و عقب‌ماندگی ذهنی (Personality Disorder & Mental Retardation)'],
                        ['axis3', 'محور ۳: وضعیت پزشکی عمومی (General Medical Condition)'],
                        ['axis4', 'محور ۴: مشکلات روانی و محیطی (Psychological & Environmental Problem)'],
                        ['axis5', 'محور ۵: سنجش کلی کارکرد (Global Assessment of Functioning)'],
                    ].map(([name, label]) => (
                        <Controller
                            key={name}
                            name={name as keyof FormData}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label={label}
                                    fullWidth
                                    multiline
                                    rows={2}
                                    placeholder="توضیح دهید..."
                                />
                            )}
                        />
                    ))}
                </Section>

                {/* ── 9. Prognosis ── */}
                <Section number="۹" title="پیش‌آگهی" subtitle="Prognosis">
                    <Alert severity="info" icon={false}>
                        اظهار نظر در مورد سیر محتمل آتی، وسعت و فرجام اختلال، عوامل پیش‌آگهی خوب و بد، اهداف اختصاصی درمان
                    </Alert>
                    <Controller
                        name="prognosis"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={3} placeholder="توضیح دهید..." />
                        )}
                    />
                </Section>

                {/* ── 10. Treatment Plan ── */}
                <Section number="۱۰" title="طرح و نقشه درمان" subtitle="Treatment Plan">
                    <SubLabel hint="نوع درمان پیشنهادی، نقش داروها، درمان سرپایی یا بستری، تعداد جلسات لازم، نوع اجتماعی درمان، نوع روان‌درمانی، نشانه‌های بالینی یا مشکلاتی که باید درمان شوند" />
                    <Controller
                        name="treatmentType"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth>
                                <InputLabel>نوع درمان</InputLabel>
                                <Select {...field} value={field.value ?? ''} label="نوع درمان">
                                    <MenuItem value="outpatient">سرپایی</MenuItem>
                                    <MenuItem value="inpatient">بستری</MenuItem>
                                    <MenuItem value="day_hospital">بیمارستان روزانه</MenuItem>
                                    <MenuItem value="combined">ترکیبی</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                    <Controller
                        name="treatmentPlan"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth multiline rows={4} placeholder="جزئیات طرح درمان را توضیح دهید..." />
                        )}
                    />
                </Section>

                {/* Submit */}
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button type="submit" variant="contained" size="large" sx={{ px: 5 }}>
                        ثبت فرم
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
