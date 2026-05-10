import {QuizOption} from "@/components/quiz/types";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";

export default function RadioField({
                        options,
                        value,
                        onChange,
                    }: {
    options: QuizOption[];
    value: string;
    onChange: (v: string) => void;
}) {
    return (
        <RadioGroup value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((opt) => (
                <FormControlLabel
                    key={opt.NumberId}
                    value={String(opt.NumberId)}
                    control={<Radio color="primary" />}
                    label={opt.Text}
                    sx={{ mb: 0.5 }}
                />
            ))}
        </RadioGroup>
    );
}
