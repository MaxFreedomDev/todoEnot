import React, { PropsWithChildren } from "react";

export enum TodoKind {
  Light = "light",
  Middle = "middle",
  High = "high",
}

export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: boolean;
  kind: TodoKind;
  date: string;
}

export interface ITodoByDate {
  date: string;
  todos: ITodo[];
}

export interface InitialState {
  listTodoByDate: ITodoByDate[];
  selectedTodo: ITodo | null;
  showNews: boolean;
}

export type ActionsMap = {
  SAVE_TODO: ITodo;
  TOGGLE_TODO: number;
  REMOVE_TODO: number;
  UPDATE_TODO: string;
  SELECTED_TODO: ITodo | null;
  EDIT_TODO: ITodo;
  TOGGLE_NEWS: boolean;
};

export type Actions = {
  [Key in keyof ActionsMap]: {
    type: Key;
    payload: ActionsMap[Key];
  };
}[keyof ActionsMap];

export interface TodoContextType {
  state: InitialState;
  dispatch: React.Dispatch<Actions>;
}

export type ReactFCWithChildren = React.FC<PropsWithChildren>;

export type DialogComponentProps = React.FC<{
  isOpen: boolean;
  setIsOpen: () => void;
}>;
