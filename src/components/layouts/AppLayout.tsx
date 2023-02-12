import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { ReactFCWithChildren } from "types";

const containerSX = {
  bgcolor: "#121212",
  display: "flex",
  height: "100vh",
  width: "100vw",
  maxWidth: "100vw",
  minWidth: 400,
};

const boxSX = {
  margin: "auto",
  bgcolor: "#222222",
  width: 390,
  height: "90%",
  borderRadius: "30px",
  display: "flex",
  flexDirection: "column",
  position: "relative",
};

const AppLayout: ReactFCWithChildren = ({ children }) => {
  return (
    <Container maxWidth={false} sx={containerSX}>
      <Box sx={boxSX}>{children}</Box>
    </Container>
  );
};

export default AppLayout;
