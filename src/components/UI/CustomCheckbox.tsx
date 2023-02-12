import CheckIcon from "@mui/icons-material/Check";
import {
  Checkbox,
  FormControlLabel,
  FormControlLabelProps,
  styled,
} from "@mui/material";
import React from "react";

const CheckboxIconContainer = styled("div")((props: { outline?: boolean }) => ({
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 23,
  height: 23,
  backgroundColor: props.outline ? "transparent" : "#F4F4F4",
  borderRadius: 5,
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: props.outline ? "#F4F4F4" : "transparent",
}));

const CheckboxCheckedIcon = (
  <CheckboxIconContainer>
    <CheckIcon />
  </CheckboxIconContainer>
);

const CheckboxUnCheckedIcon = <CheckboxIconContainer outline />;

const CustomCheckbox = styled(
  (props: Omit<FormControlLabelProps, "control">) => (
    <FormControlLabel
      {...props}
      control={
        <Checkbox
          checkedIcon={CheckboxCheckedIcon}
          icon={CheckboxUnCheckedIcon}
        />
      }
    />
  )
)(() => ({
  "& .MuiTypography-root": {
    fontSize: 24,
    fontFamily: "Abhaya Libre, sans-serif",
    fontWeight: 600,
  },
}));

export default CustomCheckbox;
