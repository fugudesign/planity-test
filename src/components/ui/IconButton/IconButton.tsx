import Button, { ButtonProps } from "@mui/material/Button";

import { ReactNode } from "react";
import clsx from "clsx";
import sx from "./IconButton.styles";

type Props = Omit<ButtonProps, "children" | "startIcon" | "endIcon"> & {
  icon?: ReactNode;
};

function IconButton({ icon, className, ...props }: Props) {
  return (
    <Button
      className={clsx("Py-IconButton", className)}
      {...props}
      sx={sx.root}
    >
      {icon}
    </Button>
  );
}

export default IconButton;
