export default {
  root: {},
  selected: {
    borderLeft: "5px solid black",
  },
  list: {
    "& .MuiPopover-paper": {
      border: "1px solid #ECEEED",
    },
    "& .MuiList-root": {
      py: 0,
    },
  },
  option: {
    height: 48,
    borderLeft: "4px solid",
    "&:not(:first-of-type)": {
      borderTop: "1px solid #ECEEED",
    },
  },
};
