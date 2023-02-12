import { useContext } from "react";
import { TodoContext } from "store";
import { TodoContextType } from "../../types";

const useTodoContext = (): TodoContextType => {
  const data = useContext(TodoContext);

  if (!data) {
    throw new Error("Can not `useTodoContext` outside of the `TodoProvider`");
  }

  return data;
};

export default useTodoContext;
