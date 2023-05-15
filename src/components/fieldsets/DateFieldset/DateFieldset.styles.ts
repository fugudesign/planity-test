export default {
  root: {},
  right: {
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    gap: 2,
  },
  text: {
    color: "#5F706A",
    fontWeight: "normal",
    fontSize: "1rem",
  },
  time: {
    "& .MuiButton-root.MuiButton-outlined": {
      px: 2.3,
      borderColor: "#ECEEED",
      color: "#34423E",
      fontWeight: "normal",
    },
  },
  checkbox: {
    "& .MuiTypography-root": {
      fontSize: "1rem",
      fontWeight: "bold",
      ml: -0.5,
    },
  },
};
