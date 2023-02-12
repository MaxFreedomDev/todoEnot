import dayjs from "dayjs";
import { ITodo, ITodoByDate } from "types";
import { useMemo } from "react";
import useToggle from "utils/hooks/useToggle";
import { today } from "utils/constants";
import useTodoContext from "utils/hooks/useTodoContext";

interface PrepareList extends ITodoByDate {
  title: string;
}

interface IDataTodoList {
  list: PrepareList[];
  showToday: boolean;
  isToday: boolean;
  setShowToday: () => void;
  toggleStatus: (id: number) => void;
  onSelect: (todo: ITodo) => void;
}

export const useDataTodoList = (): IDataTodoList => {
  const [showToday, setShowToday] = useToggle(true);

  let isToday = false;

  const {
    state: { listTodoByDate },
    dispatch,
  } = useTodoContext();

  const list = listTodoByDate
    .filter((todo) => dayjs(todo.date) >= dayjs(today))
    .map((todo) => {
      const date = dayjs(todo.date);
      if (date.isToday()) {
        isToday = true;
        return {
          title: "Today",
          ...todo,
        };
      }
      if (date.isTomorrow()) {
        return {
          title: "Tomorrow Tasks",
          ...todo,
        };
      }
      return {
        title: `${dayjs(todo.date).format("DD/MM")} Tasks`,
        ...todo,
      };
    });

  const callbacks = useMemo(() => {
    return {
      toggleStatus: (id: number) => {
        dispatch({ type: "TOGGLE_TODO", payload: id });
      },
      onSelect: (todo: ITodo) => {
        dispatch({ type: "SELECTED_TODO", payload: todo });
      },
    };
  }, []);

  const { toggleStatus, onSelect } = callbacks;

  return {
    showToday,
    setShowToday,
    list,
    toggleStatus,
    onSelect,
    isToday,
  };
};
