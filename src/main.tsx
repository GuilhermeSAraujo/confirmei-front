import React from "react";
import ReactDOM from "react-dom/client";
import { Login } from "./pages/Login";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Login />
    </ThemeProvider>
  </React.StrictMode>
);
