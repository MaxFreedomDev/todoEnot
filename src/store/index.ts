import React from "react";
import { Actions, InitialState, TodoContextType } from "types";
import dayjs from "dayjs";

export const initialState: InitialState = {
  listTodoByDate: [],
  selectedTodo: null,
  showNews: true,
};

export const reducer = (state: InitialState, action: Actions): InitialState => {
  const { type, payload } = action;
  switch (type) {
    case "SAVE_TODO":
      let newTodoByDate: InitialState["listTodoByDate"] = state.listTodoByDate;
      if (!newTodoByDate.length) {
        newTodoByDate.push({ date: payload.date, todos: [payload] });
      } else {
        const foundItemDate = newTodoByDate.find(
          (el) => el.date === payload.date
        );
        if (!foundItemDate) {
          newTodoByDate.push({ date: payload.date, todos: [payload] });
        } else {
          newTodoByDate = newTodoByDate.map((el) => {
            if (el.date === payload.date) {
              return { ...el, todos: [...el.todos, payload] };
            }
            return el;
          });
        }
      }
      return {
        ...state,
        listTodoByDate: newTodoByDate.sort((a, b) => {
          if (dayjs(a.date) < dayjs(b.date)) {
            return -1;
          }
          if (dayjs(a.date) > dayjs(b.date)) {
            return 1;
          }
          return 0;
        }),
      };
    case "REMOVE_TODO":
      const filterTodos = state.listTodoByDate.map((el) => {
        if (el.todos.find((todo) => todo.id === payload)) {
          return {
            ...el,
            todos: el.todos.filter((todo) => todo.id !== payload),
          };
        }
        return el;
      });
      return {
        ...state,
        listTodoByDate: filterTodos.filter((el) => el.todos.length),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        listTodoByDate: state.listTodoByDate.map((el) => {
          if (el.todos.find((todo) => todo.id === payload)) {
            return {
              ...el,
              todos: el.todos.map((todo) => {
                if (todo.id === payload) {
                  return { ...todo, status: !todo.status };
                }
                return todo;
              }),
            };
          }
          return el;
        }),
      };
    case "SELECTED_TODO":
      return {
        ...state,
        selectedTodo: payload,
      };
    case "EDIT_TODO":
      let list: InitialState["listTodoByDate"] = state.listTodoByDate;
      const foundItemDate = list.find((el) => el.date === payload.date);
      if (!foundItemDate) {
        list.push({ date: payload.date, todos: [payload] });
      } else {
        list = list.map((el) => {
          if (el.date === payload.date) {
            return {
              ...el,
              todos: el.todos.map((todo) => {
                if (todo.id === payload.id) return payload;
                return todo;
              }),
            };
          }
          return el;
        });
      }
      return {
        ...state,
        listTodoByDate: list,
      };
    case "TOGGLE_NEWS":
      return {
        ...state,
        showNews: !state.showNews,
      };
    default:
      return state;
  }
};

export const TodoContext = React.createContext<TodoContextType | null>(null);
