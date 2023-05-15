export default {
  root: {
    border: "1px solid #ECEEED",
    padding: "20px",
    "&.withIcon": {
      paddingLeft: "10px",
    },
  },
  icon: {
    "& .MuiSvgIcon-root": {
      color: "#7F8C88",
      width: "20px",
      height: "20px",
      mr: 1,
    },
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "&.iconTop": {
      "& .Py-Fieldset-icon": {
        mt: 1.7,
      },
    },
  },
  content: {
    width: "100%",
  },
};
