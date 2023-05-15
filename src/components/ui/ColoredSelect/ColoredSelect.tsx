import Select, { SelectProps } from "@mui/material/Select";
import { SxProps, Theme } from "@mui/material/styles";

import { Children } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import clsx from "clsx";
import sx from "./ColoredSelect.styles";

type Option = {
  label: string;
  color: string;
};

type Props = Omit<SelectProps, "children"> & {
  sx?: SxProps<Theme>;
  options: Option[];
};

function ColoredSelect({ sx: sxProp, options, ...props }: Props) {
  const option = options.find((o) => o.label === props?.value);

  return (
    <FormControl className="Py-ColoredSelect" sx={{ ...sx.root, ...sxProp }}>
      <InputLabel id="select-label" sx={{ maxWidth: "calc(100% - 10px)" }}>
        {props.label}
      </InputLabel>
      <Select
        labelId="select-label"
        inputProps={{
          className: clsx({ "Py-ColoredSelect-selected": !!props?.value }),
          sx:
            props?.value && option?.color
              ? { ...sx.selected, borderLeftColor: option.color }
              : {},
        }}
        MenuProps={{
          sx: sx.list,
        }}
        {...props}
      >
        {Children.toArray(
          options.map((o) => (
            <MenuItem
              sx={{ ...sx.option, borderLeftColor: o.color }}
              value={o.label}
            >
              {o.label}
            </MenuItem>
          ))
        )}
      </Select>
    </FormControl>
  );
}

export default ColoredSelect;
