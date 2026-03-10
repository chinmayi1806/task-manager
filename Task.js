import React from "react";

function Task({ task, deleteTask, toggleComplete }) {
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        border: "1px solid black",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: task.completed ? "lightgreen" : "white"
      }}
    >
      <span
        onClick={() => toggleComplete(task.id)}
        style={{
          cursor: "pointer",
          textDecoration: task.completed ? "line-through" : "none"
        }}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default Task;