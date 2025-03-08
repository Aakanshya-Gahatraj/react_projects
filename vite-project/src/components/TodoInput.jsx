import React, { useState } from "react";

export default function TodoInput({ todoValue, setTodoValue, addTodo }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task...."
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo(todoValue);
          setTodoValue("");
        }}
      >
        Add Task
      </button>
    </div>
  );
}
