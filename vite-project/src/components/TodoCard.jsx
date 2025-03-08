import React from "react";

export default function TodoCard(props) {
  const { children, deleteTodo, index, editTodo, todo } = props;
  const [todoChecked, setTodoChecked] = React.useState(false);

  // console.log(props);
  return (
    <li className="todoItem">
      <div className="actionsContainer">
        <input
          type="checkbox"
          onClick={() => {
            setTodoChecked((prev) => !prev);
          }}
        />
        <p className={todoChecked ? "strikethrough" : ""}>{todo}</p>
        <button
          onClick={() => {
            editTodo(index);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            deleteTodo(index);
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
