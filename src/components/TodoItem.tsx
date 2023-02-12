import React from "react";
import { ITodo } from "types";
import { colorsKind } from "utils/constants";
import {
  BlockColor,
  BlockContent,
  ContainerTodoItem,
  Paragraph,
} from "styles/components";
import { CustomSwitcher } from "components/UI";
import { Typography } from "@mui/material";

interface ITodoItem extends ITodo {
  toggleStatus: (id: number) => void;
  onSelect: (todo: ITodo) => void;
}

const TodoItem: React.FC<ITodoItem> = ({ toggleStatus, onSelect, ...todo }) => {
  const { id, kind, title, status, description } = todo;
  return (
    <ContainerTodoItem>
      <BlockColor color={colorsKind[kind]} />
      <BlockContent onClick={() => onSelect(todo)}>
        <Typography
          variant="h6"
          title={title}
          sx={{
            margin: 0,
            lineHeight: "28px",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            maxWidth: 230,
            textDecoration: status ? "line-through" : "none",
          }}
        >
          {title}
        </Typography>
        <Paragraph title={description}>{description}</Paragraph>
      </BlockContent>
      <CustomSwitcher
        checked={status}
        onChange={(_event, _checked) => {
          toggleStatus(id);
        }}
        name={id.toString()}
      />
    </ContainerTodoItem>
  );
};

export default TodoItem;
