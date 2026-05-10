export interface QuizOption {
    NumberId: number;
    Text: string;
}

export interface QuizForm {
    Id: number;
    Order: number;
    Type: "radio" | "checkbox" | "selectbox" | "multiselectbox" | "textarea";
    Question: string;
    Description: string;
    QuizOption?: QuizOption[];
}

export interface QuizResult {
    Id: number;
    Type: QuizForm["Type"];
    Question: string;
    Description: string;
    QuizOption?: QuizOption[];
    QuizAnswer: QuizOption[];
}

export interface QuizGeneratorProps {
    quizzes: QuizForm[];
    setResults: React.Dispatch<React.SetStateAction<QuizResult[]>>;
}
