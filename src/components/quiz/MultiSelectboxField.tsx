import {Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select} from "@mui/material";
import React from "react";
import {QuizOption} from "@/components/quiz/types";

export default function MultiSelectboxField({
                                 options,
                                 value,
                                 onChange,
                             }: {
    options: QuizOption[];
    value: string[];
    onChange: (v: string[]) => void;
}) {
    return (
        <FormControl fullWidth size="small">
            <InputLabel>انتخاب کنید (چندتایی)</InputLabel>
            <Select
                multiple
                value={value}
                input={<OutlinedInput label="انتخاب کنید (چندتایی)" />}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e: any) => {
                    const val: unknown = e.target.value;
                    onChange(Array.isArray(val) ? val : []);
                }}
                renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {(selected as string[]).map((id) => {
                            const opt = options.find((o) => String(o.NumberId) === id);
                            return opt ? (
                                <Chip key={id} label={opt.Text} size="small" color="primary" />
                            ) : null;
                        })}
                    </Box>
                )}
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