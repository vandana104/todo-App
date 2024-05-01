import React, { useEffect, useState } from "react";
import "./style.css";
import icon from "../utils/images/icon.png";

function Todo() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  useEffect ( ()=>{
    getData()
  },[])

  const handleAddTask = () => {
    if (input.trim() !== "") {
      setTask([...task, input]);
      setInput("");
    } else {
      alert("Enter a task!!");
    }
    saveData()
  };
  const handleRemove = (index) => {
   
    let filteredArr= [...task]
    console.log(filteredArr)
    filteredArr.splice(index,1);
    console.log(filteredArr+" afterSplice")
    setTask(filteredArr)
    saveData()
  }

  const saveData = () => {
    localStorage.setItem("data", JSON.stringify(task))
  }
  const getData= () => {
    const datafromLocal = localStorage.getItem("data")
    if(datafromLocal) {
      setTask(JSON.parse(datafromLocal))
    }
  }
  return (
    <div className="container">
      <div className="content">
        <h3>
          <img src={icon} alt="logo" />
          Todo List
        </h3>
        <div className="sectionOne">
          <input
            id="input"
            type="text"
            placeholder="Type the task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
        <ul id="task-items">
          {task.map((item,index) => (
            <li key={index}>
              {item} <span onClick={() => handleRemove(index)}>&#10005;</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
