export default {
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
    "& .MuiSvgIcon-root": {
      color: "#5F706A",
    },
  },
  icon: {
    "& .MuiSvgIcon-root": {
      width: 16,
      height: 16,
    },
  },
  buttonGroup: {
    "& .MuiButton-root.MuiButton-outlined": {
      px: 2.3,
      borderColor: "#ECEEED",
      color: "#34423E",
      fontWeight: "normal",
    },
    "& .MuiButton-root": {
      "&.selected": {
        backgroundColor: "#F6F7F8",
      },
    },
  },
};
