import { useState } from "react";

export function App() {

  let [task, setTask] = useState([]);
  let [input, setInput] = useState("");

  // Mark task as done
  function updateTask(index) {
    const updatedTasks = task.map((t, i) => {
      if (i === index) {
        return { ...t, status: "done" };
      }
      return t;
    });
    setTask(updatedTasks);
  }

  // Delete task
  function deleteTask(index) {
    const filteredTasks = task.filter((_, i) => i !== index);
    setTask(filteredTasks);
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Enter your task"
      />

      <button
        onClick={() => {
          setTask([...task, { title: input, status: "pending" }]);
          setInput("");
        }}
      >
        Add Task
      </button>

      <ul>
        {task.map((t, index) => (
          <li key={index}>
            {t.title} — {t.status}

            <button onClick={() => updateTask(index)}>Done</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}