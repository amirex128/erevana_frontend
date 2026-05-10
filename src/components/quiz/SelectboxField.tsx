import {FormControl, InputLabel, MenuItem, OutlinedInput, Select} from "@mui/material";
import React from "react";
import {QuizOption} from "@/components/quiz/types";

export default function SelectboxField({
                            options,
                            value,
                            onChange,
                        }: {
    options: QuizOption[];
    value: string;
    onChange: (v: string) => void;
}) {
    return (
        <FormControl fullWidth size="small">
            <InputLabel>انتخاب کنید</InputLabel>
            <Select
                value={value}
                label="انتخاب کنید"
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((opt) => (
                    <MenuItem key={opt.NumberId} value={String(opt.NumberId)}>
                        {opt.Text}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
