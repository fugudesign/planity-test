export default {
  root: {
    mb: 4,
  },
  card: {
    minHeight: 742,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "100%",
    borderRadius: "12px",
  },
  header: {
    display: "flex",
    padding: "10px 28px",
    borderBottom: "1px solid #ECEEED",
    "& .MuiCardHeader-title": {
      fontSize: "15px",
    },
    "& .MuiCardHeader-action": {
      display: "flex",
      gap: 1.5,
      mr: 0,
    },
  },
  content: {
    bgcolor: "#F6F7F8",
    py: "20px",
    px: "28px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    gap: 2,
  },
  actions: {
    padding: "12px 28px 12px 18px",
    borderTop: "1px solid #ECEEED",
    bgcolor: "#F6F7F8",
    display: "flex",
    justifyContent: "space-between",
    "& .actionsLeft": {
      display: "flex",
      flexDirection: "row",
      gap: 1,
    },
    "& .actionsRight": {
      display: "flex",
      flexDirection: "row",
      gap: 1.5,
    },
  },
};
