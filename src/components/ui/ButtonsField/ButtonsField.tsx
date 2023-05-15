import Button, { ButtonProps } from "@mui/material/Button";
import { Children, ReactNode } from "react";

import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormControl from "@mui/material/FormControl";
import clsx from "clsx";
import sx from "./ButtonsField.styles";

type Props = {
  name: string;
  value?: string;
  options?: string[];
  icon?: ReactNode;
  toggle?: boolean;
  fullWidth?: boolean;
  ButtonProps?: ButtonProps;
  onChange: (name: string, value: string) => void;
};

function ButtonsField({
  value,
  name,
  options,
  icon,
  toggle,
  ButtonProps,
  onChange,
  fullWidth,
}: Props) {
  return (
    <FormControl sx={sx.root} fullWidth={fullWidth}>
      <Box sx={sx.icon}>{icon}</Box>
      <ButtonGroup
        sx={sx.buttonGroup}
        size="large"
        color="inherit"
        fullWidth={fullWidth}
      >
        {Children.toArray(
          options?.map((o) => (
            <Button
              className={clsx({ selected: toggle && value === o })}
              onClick={() => onChange?.(name, o)}
              {...ButtonProps}
            >
              {o}
            </Button>
          ))
        )}
      </ButtonGroup>
    </FormControl>
  );
}

export default ButtonsField;
