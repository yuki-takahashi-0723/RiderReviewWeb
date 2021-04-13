import { TextField } from "@material-ui/core";
import React from "react";

interface PropsTypes {
  value: string;
  label: string;
  fullWidth: boolean;
  multiline: boolean;
  rows: number;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInputArea: React.FC<PropsTypes> = ({
  value,
  label,
  fullWidth,
  multiline,
  rows,
  required,
  onChange,
}) => {
  return (
    <TextField
      onChange={onChange}
      label={label}
      fullWidth={fullWidth}
      margin="dense"
      multiline={multiline}
      rows={rows}
      required={required}
      variant={"outlined"}
      value={value}
    />
  );
};

export default TextInputArea;
