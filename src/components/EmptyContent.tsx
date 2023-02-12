import React from "react";
import { Box, Typography } from "@mui/material";

const EmptyContent: React.FC = () => {
  return (
    <Box display="flex" width="100%" height="40%" textAlign="center">
      <Typography variant="h5" sx={{ margin: "auto" }}>
        To-Do list is empty...
      </Typography>
    </Box>
  );
};

export default EmptyContent;
