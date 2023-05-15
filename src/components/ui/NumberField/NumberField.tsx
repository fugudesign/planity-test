import TextField, { TextFieldProps } from "@mui/material/TextField";

import InputAdornment from "@mui/material/InputAdornment";
import { ReactNode } from "react";
import sx from "./NumberField.styles";

type Props = TextFieldProps & {
  unit?: ReactNode;
};

function NumberField({ value, onChange, unit }: Props) {
  return (
    <TextField
      sx={sx.root}
      type="number"
      value={value}
      onChange={onChange}
      InputProps={{
        endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
      }}
    />
  );
}

export default NumberField;
