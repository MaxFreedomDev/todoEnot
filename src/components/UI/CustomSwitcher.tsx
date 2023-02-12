import { styled, Switch, SwitchProps } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { IconContainer } from "styles/components";

const Icon = (
  <IconContainer fontSize={24}>
    <CloseIcon />
  </IconContainer>
);

const CheckedIcon = (
  <IconContainer fontSize={18}>
    <DoneIcon />
  </IconContainer>
);

const CustomSwitcher = styled(
  (props: Omit<SwitchProps, "icon" | "checkedIcon">) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      icon={Icon}
      checkedIcon={CheckedIcon}
      {...props}
    />
  )
)(({ theme }) => ({
  width: 50,
  height: 30,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2.5,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#F4F4F4",
      "& + .MuiSwitch-track": {
        backgroundColor: "#10C200",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 26,
    height: 25,
    boxShadow: "none",
  },
  "& .MuiSwitch-track": {
    borderRadius: 30,
    backgroundColor: "#366EFF",
    boxShadow: "inset 0px 0px 10px 3px rgba(0, 0, 0, 0.25)",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default CustomSwitcher;
