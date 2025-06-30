import React, { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then(setTasks)
      .catch(console.error);
  }, []);

  const addTask = () => {
    fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTask }),
    })
      .then((res) => res.json())
      .then((task) => setTasks([...tasks, task]))
      .catch(console.error);
    setNewTask("");
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>DevBoard</h1>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task title"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;