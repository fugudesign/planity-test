export default {
  root: {
    "& .PyFieldset-content": {
      display: "flex",
      flexDirection: "column",
      gap: 2,
    },
  },
  centerBox: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  alignCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonSuffix: {
    fontWeight: "normal",
    mt: -0.2,
    ml: -0.5,
    color: "#5F706A",
  },
  infoBlock: {
    mt: -1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& .MuiSvgIcon-root": {
      width: 16,
      height: 16,
    },
    "& .MuiTextField-root": {
      ml: 1,
    },
  },
  linkButton: {
    textDecoration: "underline",
    textUnderlineOffset: "initial",
  },
  bottomLinks: {
    gap: 2,
    mb: -1.5,
  },
};
