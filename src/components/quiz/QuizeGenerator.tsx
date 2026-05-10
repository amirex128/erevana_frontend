import React, { useEffect } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Alert,
    Button,
    Chip,
    LinearProgress,

} from "@mui/material";
import {QuizForm, QuizGeneratorProps, QuizOption, QuizResult} from "@/components/quiz/types";
import RadioField from "@/components/quiz/RadioField";
import CheckboxField from "@/components/quiz/CheckboxField";
import SelectboxField from "@/components/quiz/SelectboxField";
import MultiSelectboxField from "@/components/quiz/MultiSelectboxField";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toAnswerArray(quiz: QuizForm, value: unknown): QuizOption[] {
    const options = quiz.QuizOption ?? [];

    switch (quiz.Type) {
        case "radio":
        case "selectbox": {
            const numberId = Number(value);
            const found = options.find((o) => o.NumberId === numberId);
            return found ? [found] : [];
        }
        case "checkbox": {
            const checked = value as Record<string, boolean>;
            return options.filter((o) => checked[String(o.NumberId)]);
        }
        case "multiselectbox": {
            const ids = (value as string[]).map(Number);
            return options.filter((o) => ids.includes(o.NumberId));
        }
        case "textarea": {
            const text = String(value ?? "").trim();
            return text ? [{ NumberId: 0, Text: text }] : [];
        }
        default:
            return [];
    }
}

function buildDefaults(quizzes: QuizForm[]): Record<string, unknown> {
    const defaults: Record<string, unknown> = {};
    quizzes.forEach((q) => {
        const key = `q_${q.Id}`;
        if (q.Type === "checkbox") defaults[key] = {};
        else if (q.Type === "multiselectbox") defaults[key] = [];
        else defaults[key] = "";
    });
    return defaults;
}


// ─── Main Component ───────────────────────────────────────────────────────────

export default function QuizGenerator({ quizzes, setResults }: QuizGeneratorProps) {
    const sorted = [...quizzes].sort((a, b) => a.Order - b.Order);

    const { control } = useForm({
        defaultValues: buildDefaults(sorted),
        mode: "onChange",
    });


    const formValues = useWatch({ control }) as Record<string, unknown>;

    // Serialize form values so useEffect only fires when content actually changes
    const serialized = JSON.stringify(formValues);

    useEffect(() => {
        const results: QuizResult[] = sorted.map((quiz) => ({
            Id: quiz.Id,
            Type: quiz.Type,
            Question: quiz.Question,
            Description: quiz.Description,
            QuizOption: quiz.QuizOption,
            QuizAnswer: toAnswerArray(quiz, formValues[`q_${quiz.Id}`]),
        }));
        setResults(results);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [serialized]);

    const answered = sorted.filter(
        (quiz) => toAnswerArray(quiz, formValues[`q_${quiz.Id}`]).length > 0,
    ).length;
    const progress = sorted.length ? (answered / sorted.length) * 100 : 0;

    return (
        <Box
            dir="rtl"
            sx={{
                maxWidth: 760,
                mx: "auto",
                px: { xs: 2, sm: 3 },
                py: 4,
            }}
        >
            {/* ── Header ─────────────────────────────────────────────── */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: "primary.main" }}>
                    پرسشنامه
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <LinearProgress
                        variant="determinate"
                        value={progress}
                        sx={{ flexGrow: 1, height: 8, borderRadius: 4 }}
                    />
                    <Typography variant="body2" sx={{ whiteSpace: "nowrap", color: "text.secondary" }}>
                        {answered} / {sorted.length}
                    </Typography>
                </Box>
            </Box>

            {/* ── Questions ──────────────────────────────────────────── */}
            {sorted.map((quiz, index) => (
                <Card
                    key={quiz.Id}
                    elevation={0}
                    sx={{
                        mb: 3,
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 3,
                        transition: "box-shadow 0.2s",
                        "&:hover": { boxShadow: 4 },
                    }}
                >
                    <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                        <Box sx={{ display: "flex", gap: 1.5, mb: 1.5, alignItems: "flex-start" }}>
                            <Chip
                                label={index + 1}
                                color="primary"
                                size="small"
                                sx={{ fontWeight: 700, minWidth: 32 }}
                            />
                            <Typography variant="subtitle1" sx={{ flex: 1, fontWeight: 600 }}>
                                {quiz.Question}
                            </Typography>
                        </Box>

                        {quiz.Description && (
                            <Alert severity="info" sx={{ mb: 2, borderRadius: 2 }}>
                                {quiz.Description}
                            </Alert>
                        )}

                        <Controller
                            name={`q_${quiz.Id}`}
                            control={control}
                            render={({ field }) => {
                                switch (quiz.Type) {
                                    case "radio":
                                        return (
                                            <RadioField
                                                options={quiz.QuizOption ?? []}
                                                value={field.value as string}
                                                onChange={field.onChange}
                                            />
                                        );
                                    case "checkbox":
                                        return (
                                            <CheckboxField
                                                options={quiz.QuizOption ?? []}
                                                value={(field.value as Record<string, boolean>) ?? {}}
                                                onChange={field.onChange}
                                            />
                                        );
                                    case "selectbox":
                                        return (
                                            <SelectboxField
                                                options={quiz.QuizOption ?? []}
                                                value={field.value as string}
                                                onChange={field.onChange}
                                            />
                                        );
                                    case "multiselectbox":
                                        return (
                                            <MultiSelectboxField
                                                options={quiz.QuizOption ?? []}
                                                value={(field.value as string[]) ?? []}
                                                onChange={field.onChange}
                                            />
                                        );
                                    case "textarea":
                                        return (
                                            <TextField
                                                fullWidth
                                                multiline
                                                rows={4}
                                                placeholder="پاسخ خود را بنویسید..."
                                                value={field.value as string}
                                                onChange={field.onChange}
                                                size="small"
                                            />
                                        );
                                    default:
                                        return <></>;
                                }
                            }}
                        />
                    </CardContent>
                </Card>
            ))}

            {/* ── Submit ─────────────────────────────────────────────── */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                    variant="contained"
                    size="large"
                    disabled={answered < sorted.length}
                    sx={{ borderRadius: 3, px: 4 }}
                >
                    ثبت پاسخ‌ها
                </Button>
            </Box>
        </Box>
    );
}