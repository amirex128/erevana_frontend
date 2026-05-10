'use client'
import QuizGenerator, {QuizForm, QuizResult} from "@/components/quiz/QuizeGenerator";
import {useEffect, useState} from "react";

export default function TestsPage() {
    const [quizzes, setQuizzes] = useState<QuizForm[]>([
        {
            Id: 1,
            Order: 1,
            Type: "radio",
            Question: "سلام خوبی",
            Description: "در مورد خوب بودنت بگو",
            QuizOption:[
                {
                    NumberId: 1,
                    Text: "اره"
                },
                {
                    NumberId: 2,
                    Text: "نه"
                },
            ]
        },
        {
            Id: 2,
            Order: 2,
            Type: "checkbox",
            Question: "سلام چه خبرل",
            Description: "در مورد چه خبرا هایت بگو",
            QuizOption:[
                {
                    NumberId: 1,
                    Text: "هیچ"
                },
                {
                    NumberId: 2,
                    Text: "میگذرنیم"
                },
            ]
        }
    ])
    const [quizResults, setQuizResults] = useState<QuizResult[]>([])

    useEffect(() => {
        console.log(quizResults)
    }, [quizResults]);
    return <div>
        <QuizGenerator quizzes={quizzes} setResults={setQuizResults}/>
    </div>
}