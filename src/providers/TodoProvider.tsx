import React, { useReducer } from "react";
import { ReactFCWithChildren } from "types";
import { initialState, reducer, TodoContext } from "store";

const TodoProvider: ReactFCWithChildren = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
