import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "styles/muiTheme";

import { ReactFCWithChildren } from "../types";

const ThemeAppProvider: ReactFCWithChildren = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeAppProvider;
