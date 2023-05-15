import "~/styles/main.css";

import CssBaseline from "@mui/material/CssBaseline";
import DefaultLayout from "~/layout/default";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "~/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DefaultLayout />
    </ThemeProvider>
  );
}

export default App;
