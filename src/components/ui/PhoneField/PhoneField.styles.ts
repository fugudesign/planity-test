export default {
  root: {
    "& .MuiFormLabel-root": {
      ml: 6,
    },
    "& .MuiInputAdornment-root": {
      zIndex: 1,
      "& .MuiInputBase-root": {
        "&.Mui-focused": {
          "& .MuiSelect-select": {
            backgroundColor: "transparent",
          },
        },
        "&:before, &:after": {
          display: "none",
        },
      },
    },
    "& .Py-PhoneField-select": {
      "& .MuiSelect-select": {
        paddingTop: "12px",
      },
    },
  },
  item: {
    pt: 0.3,
    width: "100%",
    display: "flex",
  },
  itemInfos: {
    display: "none",
    alignItems: "center",
    ".MuiMenuItem-root &": {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
};
