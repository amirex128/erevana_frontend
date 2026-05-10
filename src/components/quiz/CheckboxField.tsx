import {Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select} from "@mui/material";
import React from "react";
import { QuizOption } from "./types";

export default function CheckboxField({
                           options,
                           value,
                           onChange,
                       }: {
    options: QuizOption[];
    value: Record<string, boolean>;
    onChange: (v: Record<string, boolean>) => void;
}) {
    const toggle = (numberId: number) => {
        const key = String(numberId);
        onChange({ ...value, [key]: !value[key] });
    };

    return (
        <FormGroup>
            {options.map((opt) => (
                <FormControlLabel
                    key={opt.NumberId}
                    control={
                        <Checkbox
                            checked={!!value[String(opt.NumberId)]}
                            onChange={() => toggle(opt.NumberId)}
                            color="primary"
                        />
                    }
                    label={opt.Text}
                    sx={{ mb: 0.5 }}
                />
            ))}
        </FormGroup>
    );
}
