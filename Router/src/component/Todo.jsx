import React, { useState } from "react";
// import './Todo.css';
import Dashboard from './../../../Login/src/components/Dashboard';

const Todo = () => {
  const [input, setInput] = useState(""); 
  const [task, setTask] = useState([]);


  function handleInputChange(event) {
    setInput(event.target.value);
  }


  const addTask = () => {
    if (input.trim() !== "") { 
      setTask([...task, input]);
      setInput(""); 
    }
  };

 
  const deleteTask = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };


  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]];
      setTask(updatedTasks);
    }
  }


  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index]];
      setTask(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {task.map((task, index) => (
          <li key={index}>
            {task}
            <button
              className="delete-button"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button
              className="move-button"
              onClick={() => moveTaskUp(index)}
            >
              Up
            </button>
            <button
              className="move-button"
              onClick={() => moveTaskDown(index)}
            >
              Down
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;


// gemimi 
// youtube
// Dashboard
// sportify