import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]); // for recording the state of todo items
  const [todoValue, setTodoValue] = useState(""); // for recording user's keystrokes change in input

  function persistTodo(upToDateTodo) {
    localStorage.setItem("todos", JSON.stringify({ todos: upToDateTodo }));
  }

  function addTodo(newTodo) {
    const todoList = [...todos, newTodo];
    persistTodo(todoList);
    setTodos(todoList);
  }

  function deleteTodo(index) {
    const todoList = todos.filter((todo, todoIndex) => {
      return todoIndex != index;
    });
    persistTodo(todoList);
    setTodos(todoList);
  }

  function editTodo(index) {
    const valueToEdit = todos[index];
    setTodoValue(valueToEdit);
    deleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let todosInLS = localStorage.getItem("todos");
    if (!todosInLS) {
      return;
    }
    todosInLS = JSON.parse(todosInLS).todos;

    if (!Array.isArray(todosInLS)) {
      return;
    }
    console.log({ todosInLS });
    setTodos(todosInLS);
  }, []); //this [] is empty so this code will run when page refreshed

  return (
    <>
      {/* Components Stackingg */}
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        addTodo={addTodo}
      />
      <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
