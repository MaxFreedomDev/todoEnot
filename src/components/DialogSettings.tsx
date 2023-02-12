import React, { SyntheticEvent } from "react";
import Box from "@mui/material/Box";
import { Dialog } from "@mui/material";
import { DialogComponentProps } from "types";
import { CustomCheckbox } from "components/UI";
import useTodoContext from "utils/hooks/useTodoContext";
import CustomDialogTitle from "./CustomDialogTitle";

const DialogSettings: DialogComponentProps = ({ isOpen, setIsOpen }) => {
  const {
    state: { showNews },
    dispatch,
  } = useTodoContext();
  const toggleNews = (_e: SyntheticEvent<Element, Event>, checked: boolean) => {
    dispatch({ type: "TOGGLE_NEWS", payload: checked });
  };
  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      sx={{ top: "10%", bottom: "auto" }}
    >
      <CustomDialogTitle onClose={setIsOpen} variant="h4">
        Settings
      </CustomDialogTitle>
      <Box
        display="flex"
        flexDirection="column"
        padding="0 20px"
        sx={{ width: 300, minHeight: 250 }}
      >
        <CustomCheckbox
          label="show news"
          checked={showNews}
          onChange={toggleNews}
        />
      </Box>
    </Dialog>
  );
};

export default DialogSettings;
