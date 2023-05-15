import { PropsWithChildren, ReactNode } from "react";
import { SxProps, Theme } from "@mui/material";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import clsx from "clsx";
import sx from "./Fieldset.styles";

type Props = PropsWithChildren<{
  icon?: ReactNode;
  alignIcon?: "top" | "center";
  sx?: SxProps<Theme>;
}>;

function Fieldset({ sx: sxProp, children, icon, alignIcon }: Props) {
  return (
    <Paper
      sx={{ ...sx.root, ...sxProp }}
      className={clsx("Py-Fieldset", { withIcon: !!icon })}
    >
      <Box
        className={clsx({ iconTop: alignIcon === "top" })}
        sx={{
          ...sx.container,
          alignItems: alignIcon === "top" ? "flex-start" : "center",
        }}
      >
        {!!icon && (
          <Box sx={sx.icon} className="Py-Fieldset-icon">
            {icon}
          </Box>
        )}
        <Box sx={sx.content} className="PyFieldset-content">
          {children}
        </Box>
      </Box>
    </Paper>
  );
}

export default Fieldset;
