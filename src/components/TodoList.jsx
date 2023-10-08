import React from "react";
import { TodoItems } from "./TodoItems";

export const TodoList = ({ todos, onComplete, onDeleteItem }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItems
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
};
