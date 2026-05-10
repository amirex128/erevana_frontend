'use client';

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Alert, Box, Button, Container, Paper, Typography} from '@mui/material';
import {psychiatricInterviewSchema, type PsychiatricInterviewFormData} from '@/components/psychiatricInterview/schema';
import {ChiefComplaintSection} from '@/components/psychiatricInterview/sections/ChiefComplaintSection';
import {DiagnosisSection} from '@/components/psychiatricInterview/sections/DiagnosisSection';
import {FamilyHistorySection} from '@/components/psychiatricInterview/sections/FamilyHistorySection';
import {HpiSection} from '@/components/psychiatricInterview/sections/HpiSection';
import {IdentifyingDataSection} from '@/components/psychiatricInterview/sections/IdentifyingDataSection';
import {MseSection} from '@/components/psychiatricInterview/sections/MseSection';
import {PastIllnessesSection} from '@/components/psychiatricInterview/sections/PastIllnessesSection';
import {PersonalHistorySection} from '@/components/psychiatricInterview/sections/PersonalHistorySection';
import {PrognosisSection} from '@/components/psychiatricInterview/sections/PrognosisSection';
import {TreatmentPlanSection} from '@/components/psychiatricInterview/sections/TreatmentPlanSection';

// ─── Main Component ─────────────────────────────────────────────
export default function PsychiatricInterviewForm() {
    const {
        control,
        handleSubmit,
        formState: {errors, isSubmitSuccessful},
    } = useForm<PsychiatricInterviewFormData>({
        resolver: zodResolver(psychiatricInterviewSchema),
        defaultValues: {
            thoughtFormDisorders: [],
            orientation: [],
        },
    });

    const onSubmit = (data: PsychiatricInterviewFormData) => {
        console.log('📋 فرم مصاحبه بالینی – داده‌های نهایی:', data);
    };

    return (
        <Container maxWidth="md" sx={{py: 4, direction: 'rtl'}}>

            <Paper elevation={2} sx={{ p: 3, mb: 3, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    فرم مصاحبه بالینی
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.85, mt: 0.5 }}>
                    بر اساس خلاصه روان‌پزشکی کاپلان
                </Typography>
            </Paper>

            {isSubmitSuccessful && (
                <Alert severity="success" sx={{mb: 2}}>
                    فرم با موفقیت ثبت شد. داده‌ها در کنسول قابل مشاهده‌اند.
                </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <IdentifyingDataSection control={control} errors={errors}/>
                <ChiefComplaintSection control={control} errors={errors}/>
                <HpiSection control={control}/>
                <PastIllnessesSection control={control}/>
                <FamilyHistorySection control={control}/>
                <PersonalHistorySection control={control}/>
                <MseSection control={control}/>
                <DiagnosisSection control={control}/>
                <PrognosisSection control={control}/>
                <TreatmentPlanSection control={control}/>

                <Box sx={{mt: 3, display: 'flex', justifyContent: 'center'}}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{borderRadius: 3, px: 4}}
                        type="submit"
                    >
                        ثبت فرم
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
