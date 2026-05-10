"use client";

import { useRouter } from "next/navigation";
import {
    Box,
    Typography,
    Container,
    useTheme,
    alpha,
    keyframes,
    Chip,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const shimmer = keyframes`
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
`;

const pulse = keyframes`
    0%   { transform: scale(1); }
    50%  { transform: scale(1.06); }
    100% { transform: scale(1); }
`;

const tests = [
    {
        title: "تست راهبردهای مقابله با استرس (CSQ)",
        emoji: "🧠",
        href: "/clients/tests/csq",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        shadow: "rgba(102, 126, 234, 0.4)",
        accentColor: "#667eea",
        description:
            "بررسی سبک‌های مقابله با استرس، فشار روانی و نحوه مدیریت شرایط دشوار زندگی بر اساس مدل لازاروس و فولکمن.",
        badge: "۶۶ سوالی",
        duration: "⏱ ۱۵ دقیقه",
    },
    {
        title: "تست نگرش‌های ناکارآمد (DAS-26)",
        emoji: "💭",
        href: "/clients/tests/das26",
        gradient: "linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)",
        shadow: "rgba(255, 94, 98, 0.4)",
        accentColor: "#ff9966",
        description:
            "ارزیابی افکار منفی، کمال‌گرایی، نیاز به تایید دیگران و الگوهای شناختی ناسالم مرتبط با اضطراب و افسردگی.",
        badge: "۲۶ سوالی",
        duration: "⏱ ۱۰ دقیقه",
    },
    {
        title: "تست تحریف‌های شناختی عبدالله‌زاده",
        emoji: "🪞",
        href: "/clients/tests/cognitive",
        gradient: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
        shadow: "rgba(24, 90, 157, 0.35)",
        accentColor: "#43cea2",
        description:
            "سنجش خطاهای شناختی و الگوهای فکری ناسالم مانند تفکر همه یا هیچ، تعمیم مبالغه‌آمیز، فیلتر ذهنی و شخصی‌سازی.",
        badge: "۲۰ سوالی",
        duration: "⏱ ۷ دقیقه",
    },
];

function TestCard({
                      test,
                      fullWidth = false,
                  }: {
    test: (typeof tests)[number];
    fullWidth?: boolean;
}) {
    const router = useRouter();
    const theme = useTheme();
    const isRTL = theme.direction === "rtl";

    return (
        <Box
            dir="rtl"
            onClick={() => router.push(test.href)}
            sx={{
                position: "relative",
                borderRadius: 6,
                overflow: "hidden",
                cursor: "pointer",
                minHeight: 260,
                gridColumn: fullWidth ? "1 / -1" : "auto",
                transition:
                    "transform .35s ease, box-shadow .35s ease, filter .35s ease",
                "&:hover": {
                    transform: "translateY(-8px)",
                    filter: "brightness(1.03)",
                    "& .card-glow": {
                        opacity: 1,
                    },
                    "& .card-emoji": {
                        animation: `${pulse} 1.2s ease-in-out infinite`,
                    },
                    "& .card-arrow": {
                        transform: isRTL
                            ? "translateX(-6px)"
                            : "translateX(6px)",
                    },
                    "& .card-shimmer": {
                        opacity: 1,
                    },
                },
            }}
        >
            {/* Glow */}
            <Box
                className="card-glow"
                sx={{
                    position: "absolute",
                    inset: -8,
                    borderRadius: 8,
                    background: test.gradient,
                    opacity: 0.45,
                    filter: "blur(30px)",
                    zIndex: 0,
                    transition: "opacity .4s ease",
                }}
            />

            {/* Main Card */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    background: test.gradient,
                    borderRadius: 6,
                    p: { xs: 3, md: 4 },
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: `0 18px 40px ${test.shadow}`,
                    border: `1px solid ${alpha("#fff", 0.15)}`,
                    backdropFilter: "blur(12px)",
                }}
            >
                {/* Shimmer */}
                <Box
                    className="card-shimmer"
                    sx={{
                        position: "absolute",
                        inset: 0,
                        opacity: 0,
                        transition: "opacity .35s ease",
                        background: `linear-gradient(
                            110deg,
                            transparent 20%,
                            ${alpha("#fff", 0.08)} 40%,
                            ${alpha("#fff", 0.12)} 50%,
                            transparent 80%
                        )`,
                        backgroundSize: "250% 100%",
                        animation: `${shimmer} 4s linear infinite`,
                    }}
                />

                {/* Decorative blur */}
                <Box
                    sx={{
                        position: "absolute",
                        width: 180,
                        height: 180,
                        borderRadius: "50%",
                        background: alpha("#fff", 0.08),
                        top: -60,
                        left: -60,
                    }}
                />

                <Box
                    sx={{
                        position: "absolute",
                        width: 120,
                        height: 120,
                        borderRadius: "50%",
                        background: alpha("#fff", 0.06),
                        bottom: -40,
                        right: -40,
                    }}
                />

                {/* Top */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                        }}
                    >
                        <Box
                            className="card-emoji"
                            sx={{
                                width: 72,
                                height: 72,
                                borderRadius: "24px",
                                background: alpha("#fff", 0.16),
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backdropFilter: "blur(12px)",
                                border: `1px solid ${alpha("#fff", 0.2)}`,
                                fontSize: 34,
                                boxShadow: `0 8px 25px ${alpha(
                                    "#000",
                                    0.15
                                )}`,
                            }}
                        >
                            {test.emoji}
                        </Box>

                        <Box>
                            <Chip
                                label={test.badge}
                                size="small"
                                sx={{
                                    mb: 1,
                                    fontWeight: 800,
                                    background: alpha("#fff", 0.18),
                                    color: "#fff",
                                    border: `1px solid ${alpha("#fff", 0.22)}`,
                                    backdropFilter: "blur(10px)",
                                }}
                            />

                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontSize: { xs: 17, md: 20 },
                                    fontWeight: 900,
                                    lineHeight: 1.9,
                                    maxWidth: 420,
                                    textShadow:
                                        "0 2px 10px rgba(0,0,0,.15)",
                                }}
                            >
                                {test.title}
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        className="card-arrow"
                        sx={{
                            minWidth: 46,
                            width: 46,
                            height: 46,
                            borderRadius: "16px",
                            background: alpha("#fff", 0.18),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            border: `1px solid ${alpha("#fff", 0.2)}`,
                            transition: "all .3s ease",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <ArrowForwardIosIcon
                            sx={{
                                fontSize: 18,
                                transform: isRTL ? "scaleX(-1)" : "none",
                            }}
                        />
                    </Box>
                </Box>

                {/* Content */}
                <Box sx={{ mt: 3 }}>
                    <Typography
                        sx={{
                            color: alpha("#fff", 0.92),
                            fontSize: { xs: 13.5, md: 14.5 },
                            lineHeight: 2.1,
                            fontWeight: 400,
                        }}
                    >
                        {test.description}
                    </Typography>
                </Box>

                {/* Footer */}
                <Box
                    sx={{
                        mt: 4,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 1.5,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: 1,
                            flexWrap: "wrap",
                        }}
                    >
                        <Chip
                            icon={
                                <PsychologyRoundedIcon
                                    sx={{ color: "#fff !important" }}
                                />
                            }
                            label="استاندارد روان‌شناسی"
                            sx={{
                                color: "#fff",
                                background: alpha("#fff", 0.15),
                                border: `1px solid ${alpha("#fff", 0.2)}`,
                                backdropFilter: "blur(10px)",
                            }}
                        />

                        <Chip
                            icon={
                                <AutoAwesomeRoundedIcon
                                    sx={{ color: "#fff !important" }}
                                />
                            }
                            label={test.duration}
                            sx={{
                                color: "#fff",
                                background: alpha("#fff", 0.15),
                                border: `1px solid ${alpha("#fff", 0.2)}`,
                                backdropFilter: "blur(10px)",
                            }}
                        />
                    </Box>

                    <Typography
                        sx={{
                            color: alpha("#fff", 0.85),
                            fontSize: 13,
                            fontWeight: 700,
                        }}
                    >
                        شروع آزمون
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default function TestCardsSection() {
    const isOdd = tests.length % 2 !== 0;

    return (
        <Box
            sx={{
                py: { xs: 5, md: 8 },
                px: 2,
                direction: "rtl",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background: `
                        radial-gradient(circle at top right, rgba(102,126,234,.08), transparent 25%),
                        radial-gradient(circle at bottom left, rgba(255,94,98,.08), transparent 25%)
                    `,
                    zIndex: 0,
                }}
            />

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
                {/* Header */}
                <Box
                    sx={{
                        textAlign: "center",
                        mb: { xs: 5, md: 7 },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: 28, md: 42 },
                            fontWeight: 900,
                            mb: 2,
                            background:
                                "linear-gradient(135deg,#667eea 0%,#ff5e62 50%,#43cea2 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        🧪 آزمون‌های روان‌شناسی
                    </Typography>

                    <Typography
                        sx={{
                            color: "text.secondary",
                            fontSize: { xs: 14, md: 16 },
                            lineHeight: 2.2,
                            maxWidth: 700,
                            mx: "auto",
                        }}
                    >
                        مجموعه‌ای از آزمون‌های معتبر روان‌شناسی برای تحلیل
                        شناخت، هیجان، نگرش و الگوهای رفتاری شما
                    </Typography>
                </Box>

                {/* Grid */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "repeat(2, minmax(0, 1fr))",
                        },
                        gap: 3,
                        alignItems: "stretch",
                    }}
                >
                    {tests.map((test, index) => {
                        const isLastOddItem =
                            isOdd && index === tests.length - 1;

                        return (
                            <TestCard
                                key={test.href}
                                test={test}
                                fullWidth={isLastOddItem}
                            />
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
}