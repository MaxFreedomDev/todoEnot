import { DialogTitle, DialogTitleProps } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { StyledIcon } from "styles/components";

interface CustomDialogTitleProps extends DialogTitleProps {
  onClose?: () => void;
}

const Close = StyledIcon(CloseIcon, { position: "absolute", right: 8, top: 8 });

const CustomDialogTitle = (props: CustomDialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? <Close aria-label="close" onClick={onClose} /> : null}
    </DialogTitle>
  );
};

export default CustomDialogTitle;
