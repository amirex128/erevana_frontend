'use client'

import {use, useEffect, useState} from "react";
import QuizGenerator, {QuizForm, QuizResult} from "@/components/quiz/QuizeGenerator";

import csq from "./csq.json";
import das26 from "./das26.json";

export default function DynamicTestPage({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = use(params);

    const getInitialQuizzes = (): QuizForm[] => {
        switch (slug) {
            case 'csq':
                return csq as QuizForm[];

            case 'das26':
                return das26 as QuizForm[];

            default:
                return [];
        }
    }

    const [quizResults, setQuizResults] = useState<QuizResult[]>([]);

    useEffect(() => {
        console.log(quizResults);
    }, [quizResults]);

    return (
        <QuizGenerator
            quizzes={getInitialQuizzes()}
            setResults={setQuizResults}
        />
    );
}