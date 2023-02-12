import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { StyledIcon } from "styles/components";
import DialogSettings from "./DialogSettings";
import ButtonToggleDialog from "./ButtonToggleDialog";
import FormDialogCreateTodo from "./FormDialogCreateTodo";

const Settings = StyledIcon(SettingsIcon);
const Add = StyledIcon(AddCircleIcon);

const Header: React.FC = () => {
  return (
    <Box
      display="flex"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      padding="13px 37px 0"
      boxSizing="border-box"
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Actor', sans-serif",
        }}
      >
        To Do
      </Typography>
      <Box display="flex" alignItems="center" columnGap={2}>
        <ButtonToggleDialog
          hint="Add Todo"
          Icon={Add}
          Dialog={FormDialogCreateTodo}
        />
        <ButtonToggleDialog
          hint="Settings"
          Icon={Settings}
          Dialog={DialogSettings}
        />
      </Box>
    </Box>
  );
};

export default Header;
