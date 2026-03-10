import React, { useState } from "react";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (text.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", textAlign: "center", fontFamily: "Arial" }}>
      <h2>Task Manager</h2>
      <h1>Task Manager App</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTask()}
          style={{ padding: "8px", width: "250px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <button 
          onClick={addTask}
          style={{ padding: "8px 15px", marginLeft: "5px", cursor: "pointer" }}
        >
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <p style={{ color: "#888" }}>No tasks available</p>
      ) : (
        tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
  );
}

export default App;