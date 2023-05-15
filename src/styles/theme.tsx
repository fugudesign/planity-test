import { Shadows, createTheme } from "@mui/material/styles";

import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#48BB78",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#F56565",
      contrastText: "#FFF",
    },
    ternary: {
      main: "#2C5282",
      contrastText: "#FFF",
    },
    background: {
      default: "#CDCDCD",
    },
    text: {
      primary: "#34423E",
    },
  },
  typography: {
    fontFamily: "Open Sans",
    fontSize: 13,
    fontWeightRegular: 400,
    fontWeightBold: 600,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1100,
      xl: 1536,
    },
  },
  shadows: Array(25).fill("none") as Shadows,
  shape: {
    borderRadius: 6,
  },
});


declare module "@mui/material/styles" {
  interface Palette {
    ternary: Palette["primary"];
  }
  interface PaletteOptions {
    ternary: PaletteOptions["primary"];
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    extralarge: true;
  }
  interface ButtonPropsColorOverrides {
    ternary: true;
  }
}
export default theme;
