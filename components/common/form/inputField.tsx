import { TextField } from "@mui/material";
import * as React from "react";
import { Control, useController } from "react-hook-form";

export interface InputFieldProps {
  name: string;
  type: string;
  label?: string;
  control: Control<any>;
}

export function InputField({ name, label, type, control }: InputFieldProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      label={label}
      type={type}
      autoComplete="on"
      variant="outlined"
      sx={{ width: "100%", mb: "30px" }}
      error={!!error}
      helperText={error?.message}
    />
  );
}
