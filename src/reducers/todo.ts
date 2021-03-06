import { ActionTypes } from "../actions/types";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface todosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export const todosReducer = (state = [], action: todosAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;

    default:
      return state;
  }
};
