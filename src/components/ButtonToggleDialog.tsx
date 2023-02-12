import React from "react";
import { SvgIconTypeMap, Tooltip } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import useToggle from "utils/hooks/useToggle";
import { DialogComponentProps } from "types";

interface ButtonToggleDialogProps {
  hint?: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  Dialog: DialogComponentProps;
}

const ButtonToggleDialog: React.FC<ButtonToggleDialogProps> = ({
  hint,
  Icon,
  Dialog,
}) => {
  const [isOpen, setIsOpen] = useToggle();
  return (
    <>
      <Tooltip title={hint}>
        <Icon onClick={setIsOpen} />
      </Tooltip>
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ButtonToggleDialog;
