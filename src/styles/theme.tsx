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

theme.components = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiButton: {
    defaultProps: {
      color: "inherit",
      variant: "contained",
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        textTransform: "none",
        fontWeight: "bold",
        "& .MuiButton-startIcon": {
          color: "#5F706A",
          marginRight: 4,
          "& .MuiSvgIcon-root": {
            width: "0.8em",
            height: "0.8em",
          },
        },
        "&.Py-IconButton": {
          minWidth: 0,
        },
        "& .MuiSvgIcon-root": {
          width: "0.9em",
          height: "0.9em",
        },
      },
    },
    variants: [
      {
        props: { variant: "text" },
        style: {
          textDecoration: "underline",
          textUnderlineOffset: "3px",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
      {
        props: { size: "small" },
        style: {
          fontSize: "1rem",
          padding: "10px",
          maxHeight: "36px",
          minWidth: "36px",
          "&.Py-IconButton": {
            maxWidth: "36px",
          },
        },
      },
      {
        props: { size: "medium" },
        style: {
          fontSize: "1rem",
          padding: "10px",
          maxHeight: "40px",
          minWidth: "40px",
          "&.Py-IconButton": {
            maxWidth: "40px",
          },
        },
      },
      {
        props: { size: "large" },
        style: {
          fontSize: "1rem",
          padding: "14px",
          maxHeight: "48px",
          minWidth: "48px",
          "&.Py-IconButton": {
            maxWidth: "48px",
          },
        },
      },
      {
        props: { size: "extralarge" },
        style: {
          fontSize: "1rem",
          padding: "20px",
          maxHeight: "56px",
          minWidth: "56px",
          "&.Py-IconButton": {
            maxWidth: "56px",
          },
        },
      },
    ],
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        "&.Mui-focused": {
          boxShadow: "0 0 5px 0 #48BB784D",
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px !important",
          },
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: "0.95rem",
        color: "#7F8C88",
        maxWidth: "calc(100% - 30px)",
        "&.MuiInputLabel-shrink": {
          color: "#7F8C88",
          fontSize: "16px",
        },
      },
    },
    variants: [
      {
        props: {
          shrink: true,
        },
        style: {
          top: 15,
          "& + .MuiInputBase-root": {
            "& .MuiInputBase-input": {
              paddingTop: "24px",
              paddingBottom: "6px",
            },
            "& fieldset": {
              top: 0,
              "& legend": {
                display: "none",
              },
            },
          },
        },
      },
    ],
  },
  MuiTextField: {
    defaultProps: {
      size: "medium",
    },
    styleOverrides: {
      root: {
        "& .MuiInputBase-input": {
          fontSize: "1rem",
        },
      },
    },
    variants: [
      {
        props: {
          multiline: true,
        },
        style: {
          "& .MuiInputBase-multiline": {
            paddingTop: 4,
            paddingBottom: 4,
          },
          "& .MuiFormLabel-root": {
            transform: "translate(14px, -7px) scale(0.75)",
            "&:not(.MuiInputLabel-shrink)": {
              transform: "translate(14px, 10px) scale(1) !important",
            },
          },
        },
      },
      {
        props: {
          size: "medium",
        },
        style: {
          "& .MuiOutlinedInput-input": {
            paddingTop: 14.66,
            paddingBottom: 14.66,
          },
          "& .MuiInputLabel-root:not(.MuiInputLabel-shrink)": {
            transform: "translate(14px, 14.5px) scale(1)",
          },
        },
      },
      {
        props: {
          variant: "outlined",
        },
        style: {
          "& fieldset": {
            borderColor: "#ECEEED",
          },
        },
      },
      {
        props: {
          variant: "outlined",
          disabled: true,
        },
        style: {
          "& fieldset": {
            border: "none",
            backgroundColor: "#ECEEED",
          },
        },
      },
    ],
  },
  MuiSelect: {
    defaultProps: {
      size: "medium",
    },
    styleOverrides: {
      icon: {
        top: "calc(50% - 12.5px)",
        width: 24,
        height: 24,
      },
    },
    variants: [
      {
        props: {
          size: "medium",
        },
        style: {
          "& .MuiOutlinedInput-input": {
            paddingTop: 15.35,
            paddingBottom: 15.35,
          },
        },
      },
      {
        props: {
          variant: "outlined",
        },
        style: {
          "& fieldset": {
            borderColor: "#ECEEED",
          },
        },
      },
      {
        props: {
          variant: "outlined",
          disabled: true,
        },
        style: {
          "& fieldset": {
            border: "none",
            backgroundColor: "#ECEEED",
          },
        },
      },
    ],
  },
  MuiCheckbox: {
    defaultProps: {
      color: "default",
      icon: <CheckBoxOutlineBlankOutlinedIcon />,
      checkedIcon: <CheckBoxOutlinedIcon />,
    },
    styleOverrides: {
      root: {
        color: "#34423E",
      },
      checked: {
        color: "#34423E",
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: "10px 28px",
        "& .MuiTypography-root": {
          fontSize: "0.9rem",
          fontWeight: "bold",
        },
      },
    },
  },
};

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
