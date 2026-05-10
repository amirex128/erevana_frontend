"use client";

import { useRouter } from "next/navigation";
import {
    Box,
    Typography,
    Container,
    useTheme,
    alpha,
    keyframes,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const float = keyframes`
    0%   { transform: translateY(0px); }
    50%  { transform: translateY(-8px); }
    100% { transform: translateY(0px); }
`;

const shimmer = keyframes`
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
`;

const pulse = keyframes`
    0%   { transform: scale(1); }
    50%  { transform: scale(1.05); }
    100% { transform: scale(1); }
`;

const tests = [
    {
        title: "تست راهبردهای مقابله با استرس (CSQ)",
        emoji: "🧠",
        href: "/mobile/tests/csq",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        shadow: "rgba(102, 126, 234, 0.4)",
        accentColor: "#667eea",
        description:
            "بررسی سبک‌های مقابله با استرس، فشار روانی و نحوه مدیریت شرایط دشوار زندگی بر اساس مدل لازاروس و فولکمن.",
        badge: "۲۰ سوالی",
        duration: "⏱ ۸ دقیقه",
    },
    {
        title: "تست نگرش‌های ناکارآمد (DAS-26)",
        emoji: "💭",
        href: "/mobile/tests/das26",
        gradient: "linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)",
        shadow: "rgba(255, 94, 98, 0.4)",
        accentColor: "#ff9966",
        description:
            "ارزیابی افکار منفی، کمال‌گرایی، نیاز به تایید دیگران و الگوهای شناختی ناسالم مرتبط با اضطراب و افسردگی.",
        badge: "۲۶ سوالی",
        duration: "⏱ ۱۰ دقیقه",
    },
];

function TestCard({ test }: { test: (typeof tests)[number] }) {
    const router = useRouter();
    const theme = useTheme();
    const isRTL = theme.direction === "rtl";

    return (
        <Box
            onClick={() => router.push(test.href)}
            sx={{
                position: "relative",
                borderRadius: 5,
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                "&:hover": {
                    transform: "translateY(-6px) scale(1.02)",
                    "& .card-glow": {
                        opacity: 1,
                    },
                    "& .card-emoji": {
                        animation: `${pulse} 1s ease-in-out infinite`,
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
                "&:active": {
                    transform: "translateY(-2px) scale(0.98)",
                },
            }}
        >
            {/* Glow Effect Behind Card */}
            <Box
                className="card-glow"
                sx={{
                    position: "absolute",
                    inset: -2,
                    borderRadius: 6,
                    background: test.gradient,
                    filter: `blur(20px)`,
                    opacity: 0.4,
                    transition: "opacity 0.4s ease",
                    zIndex: 0,
                }}
            />

            {/* Main Card */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 1,
                    background: test.gradient,
                    borderRadius: 5,
                    p: { xs: 3, sm: 3.5 },
                    minHeight: 200,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    boxShadow: `0 10px 40px ${test.shadow}, 0 2px 10px rgba(0,0,0,0.1)`,
                }}
            >
                {/* Shimmer overlay */}
                <Box
                    className="card-shimmer"
                    sx={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 5,
                        background: `linear-gradient(90deg, transparent 0%, ${alpha("#fff", 0.08)} 50%, transparent 100%)`,
                        backgroundSize: "200% 100%",
                        animation: `${shimmer} 3s linear infinite`,
                        opacity: 0,
                        transition: "opacity 0.4s ease",
                        pointerEvents: "none",
                    }}
                />

                {/* Top Row: Emoji + Badge + Arrow */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                        }}
                    >
                        {/* Emoji Circle */}
                        <Box
                            className="card-emoji"
                            sx={{
                                width: 60,
                                height: 60,
                                borderRadius: "50%",
                                background: alpha("#fff", 0.2),
                                backdropFilter: "blur(10px)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 30,
                                boxShadow: `0 4px 15px ${alpha("#fff", 0.15)}`,
                                border: `2px solid ${alpha("#fff", 0.25)}`,
                                transition: "all 0.3s ease",
                            }}
                        >
                            {test.emoji}
                        </Box>

                        {/* Badge */}
                        <Box
                            sx={{
                                background: alpha("#fff", 0.2),
                                backdropFilter: "blur(10px)",
                                borderRadius: 10,
                                px: 1.8,
                                py: 0.6,
                                border: `1px solid ${alpha("#fff", 0.25)}`,
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontSize: 12,
                                    fontWeight: 700,
                                    letterSpacing: 0.5,
                                }}
                            >
                                {test.badge}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Arrow Icon */}
                    <Box
                        className="card-arrow"
                        sx={{
                            width: 38,
                            height: 38,
                            borderRadius: "50%",
                            background: alpha("#fff", 0.2),
                            backdropFilter: "blur(10px)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: `1px solid ${alpha("#fff", 0.25)}`,
                            transition: "all 0.3s ease",
                            color: "#fff",
                        }}
                    >
                        <ArrowForwardIosIcon
                            sx={{
                                fontSize: 16,
                                transform: isRTL ? "scaleX(-1)" : "none",
                            }}
                        />
                    </Box>
                </Box>

                {/* Title */}
                <Typography
                    sx={{
                        color: "#fff",
                        fontSize: { xs: 16, sm: 18 },
                        fontWeight: 800,
                        lineHeight: 1.6,
                        textShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    }}
                >
                    {test.title}
                </Typography>

                {/* Description */}
                <Typography
                    sx={{
                        color: alpha("#fff", 0.88),
                        fontSize: { xs: 13, sm: 14 },
                        fontWeight: 400,
                        lineHeight: 1.9,
                        textShadow: "0 1px 4px rgba(0,0,0,0.1)",
                    }}
                >
                    {test.description}
                </Typography>

                {/* Bottom Row: Duration */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: "auto",
                        pt: 1,
                    }}
                >
                    <Box
                        sx={{
                            background: alpha("#fff", 0.15),
                            borderRadius: 10,
                            px: 1.5,
                            py: 0.5,
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                        }}
                    >
                        <Typography
                            sx={{
                                color: alpha("#fff", 0.9),
                                fontSize: 12,
                                fontWeight: 600,
                            }}
                        >
                            {test.duration}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default function TestCardsSection() {
    return (
        <Box
            sx={{
                py: { xs: 4, sm: 6 },
                px: 2,
                direction: "rtl",
            }}
        >
            <Container maxWidth="md">
                {/* Section Header */}
                <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 5 } }}>
                    <Typography
                        sx={{
                            fontSize: { xs: 22, sm: 28 },
                            fontWeight: 900,
                            background:
                                "linear-gradient(135deg, #667eea 0%, #ff5e62 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            mb: 1,
                        }}
                    >
                        🧪 آزمون‌های روان‌شناسی
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: 13, sm: 15 },
                            color: "text.secondary",
                            fontWeight: 400,
                            maxWidth: 500,
                            mx: "auto",
                            lineHeight: 1.8,
                        }}
                    >
                        با انجام تست‌های معتبر علمی، شناخت بهتری از خودتان
                        پیدا کنید
                    </Typography>
                </Box>

                {/* Cards Grid */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "1fr 1fr",
                        },
                        gap: { xs: 2.5, sm: 3 },
                    }}
                >
                    {tests.map((test) => (
                        <TestCard key={test.href} test={test} />
                    ))}
                </Box>
            </Container>
        </Box>
    );
}