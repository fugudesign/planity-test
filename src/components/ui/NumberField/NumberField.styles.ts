export default {
  root: {
    "& .MuiInputAdornment-root": {
      height: "100%",
      maxHeight: "none",
      minWidth: 48,
      mr: -1.5,
      px: 2,
      bgcolor: "#F9F9F9",
      borderLeft: "1px solid #ECEEED",
      display: "flex",
      justifyContent: "center",
      color: "#34423E",
      "& .MuiTypography-root": {
        fontSize: "13px",
        color: "#34423E",
        margin: "revert",
      },
    },
    "& .MuiInputBase-input": {
      width: 45,
      textAlign: "center",
    },
  },
};
