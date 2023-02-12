import React from "react";
import dayjs from "dayjs";
import isTomorrow from "dayjs/plugin/isTomorrow";
import isToday from "dayjs/plugin/isToday";
import { Box } from "@mui/material";
import { CustomCheckbox, TodosContainer } from "components/UI";
import TodoItem from "../TodoItem";
import { useDataTodoList } from "./useDataTodoList";
import EmptyContent from "../EmptyContent";

dayjs.extend(isTomorrow);
dayjs.extend(isToday);

const TodoList: React.FC = () => {
  const { isToday, showToday, setShowToday, list, toggleStatus, onSelect } =
    useDataTodoList();
  if (!list.length) {
    return <EmptyContent />;
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      overflow="auto"
      maxHeight="90%"
      boxSizing="border-box"
    >
      {isToday && (
        <CustomCheckbox
          label="Today Tasks:"
          sx={{ padding: "15px 37px" }}
          checked={showToday}
          onChange={setShowToday}
        />
      )}
      <Box
        display="flex"
        flexDirection="column"
        rowGap="32px"
        padding={isToday ? "0 20px" : "30px 20px"}
        boxSizing="border-box"
      >
        {list.map((item) => (
          <TodosContainer
            key={item.title}
            title={item.title === "Today" ? "" : item.title}
            isHidden={item.title === "Today" ? !showToday : false}
          >
            {item.todos.map((todo) => {
              return (
                <TodoItem
                  {...todo}
                  key={todo.id}
                  toggleStatus={toggleStatus}
                  onSelect={onSelect}
                />
              );
            })}
          </TodosContainer>
        ))}
      </Box>
    </Box>
  );
};

export default TodoList;
