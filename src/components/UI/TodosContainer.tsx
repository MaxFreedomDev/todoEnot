import { Typography } from "@mui/material";
import React from "react";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import Collapse from "@mui/material/Collapse";
import useToggle from "utils/hooks/useToggle";
import { BlockColor, Title } from "styles/components";

const TodosContainer = ({
  children,
  title,
  isHidden,
}: {
  children: JSX.Element[];
  title?: string;
  isHidden?: boolean;
}) => {
  const [expanded, setExpanded] = useToggle(!title);

  if (isHidden) return null;

  return (
    <Collapse
      in={expanded}
      collapsedSize={79}
      sx={{
        width: 350,
        background: "#282828",
        boxShadow:
          "16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)",
        borderRadius: expanded ? "40px" : "25px",
        padding: "16px 25px 18px 17px",
        boxSizing: "border-box",
        "& .MuiCollapse-wrapperInner": {
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
        },
      }}
    >
      {title && (
        <Title
          onClick={setExpanded}
          sx={{
            cursor: "pointer",
            "&:hover": {
              opacity: 0.7,
            },
          }}
        >
          <BlockColor color="#A9A9A9" sx={{ marginRight: "13px" }} />
          <Typography variant="h6">{title}</Typography>
          <ExpandCircleDownIcon
            sx={{
              marginLeft: "auto",
              fontSize: 22,
              transition: "transform 0.3s",
              transform: expanded ? "rotate(0deg)" : "rotate(180deg)",
            }}
          />
        </Title>
      )}
      {expanded && children}
    </Collapse>
  );
};

export default TodosContainer;
