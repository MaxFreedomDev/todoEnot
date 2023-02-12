import { OverridableComponent } from "@mui/material/OverridableComponent";
import { styled, SvgIconTypeMap } from "@mui/material";
import { CSSProperties } from "react";

const StyledIcon = (
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
  styles?: CSSProperties
) =>
  styled(Icon)(() => ({
    width: 28.5,
    height: 30,
    cursor: "pointer",
    transition: "opacity 0.3s",
    "&:hover": {
      opacity: 0.7,
    },
    ...styles,
  }));

const BlockColor = styled("div")((props) => ({
  width: 5,
  height: 40,
  borderRadius: 3,
  backgroundColor: props.color,
}));

const Title = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  background: "transparent",
}));

const IconContainer = styled("div")((props: { fontSize: number }) => ({
  width: 26,
  height: 25,
  borderRadius: "50%",
  backgroundColor: "#F4F4F4",
  color: "#A9A9A9",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  svg: {
    fontSize: props.fontSize,
  },
}));

const Paragraph = styled("p")(() => ({
  maxWidth: 200,
  color: "rgba(255, 255, 255, 0.6)",
  fontSize: 14,
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  margin: 0,
  height: 16,
}));

const BlockContent = styled("div")(() => ({
  width: "100%",
  height: 40,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "opacity 0.3s",
  cursor: "pointer",
  "&:hover": {
    opacity: 0.7,
  },
}));

const ContainerTodoItem = styled("div")(() => ({
  height: 46,
  width: "100%",
  display: "flex",
  alignItems: "center",
  backgroundColor: "transparent",
  columnGap: 11,
}));

export {
  BlockColor,
  StyledIcon,
  Title,
  IconContainer,
  Paragraph,
  BlockContent,
  ContainerTodoItem,
};
