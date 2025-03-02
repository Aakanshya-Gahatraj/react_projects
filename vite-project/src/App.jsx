import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoCard from "./components/TodoCard";

function App() {
  const [todos, setTodos] = useState(["go to gym", "walk the dog"]);

  function addTodo(newTodo) {
    const todoList = [...todos, newTodo];
    setTodos(todoList);
  }

  return (
    <>
      {/* Components Stackingg */}
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
