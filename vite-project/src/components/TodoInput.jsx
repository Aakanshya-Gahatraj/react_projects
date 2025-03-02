import React, { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [todoValue, setTodoValue] = useState("");
  return (
    <div>
      <form action="" method="post">
        <input
          type="text"
          placeholder="Add a new task...."
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button onClick={() => addTodo(todoValue)}>Add Task</button>
      </form>
    </div>
  );
}
