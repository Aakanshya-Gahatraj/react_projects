import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos, ...rest } = props; //...rest sends everything except todos

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...rest} index={todoIndex} key={todoIndex} todo={todo} />
        );
      })}
    </ul>
  );
}
