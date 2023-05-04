import { useState } from "react";

export const ToDoList = function () {
  //holds tasks saved in localstorage
  let storedTasks = [];

  //check if tasks are in localstorage
  if (getLocalStorage()) {
    storedTasks = getLocalStorage();
  }

  const [list, setList] = useState(storedTasks);

  const addTaskToList = function (e) {
    const task = e.target.parentElement.querySelector("#taskInput");
    list.push({
      taskName: task.value,
      id: crypto.randomUUID(),
      taskStatus: "",
    });
    task.value = "";
    setList([...list]);
    setLocalStorage(list);
  };

  const markDone = (e) => {
    //prevents error in the event bubbling phase
    //because there is delete btn inside the li element, this is necesssary
    if (!e.target.classList.contains("task")) return;

    //find task in list
    const taskId = e.target.getAttribute("dataid");
    const task = list.find((task) => task.id === taskId);

    //set taskStatus: done or ""
    task.taskStatus = !task.taskStatus ? "done" : "";

    //update LocalStorage
    setLocalStorage(list);

    //Apply consmetic changes

    if (e.target.style.textDecoration === "line-through") {
      e.target.style.textDecoration = "none";
      return;
    }
    e.target.style.textDecoration = "line-through";
  };

  function setLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function getLocalStorage() {
    return JSON.parse(localStorage.getItem("tasks"));
  }

  return (
    <div>
      <form className="ToDoList">
        <label htmlFor="taskInput">Task Name</label>
        <input type="text" className="taskInput" id="taskInput" />
        <button type="button" onClick={addTaskToList}>
          Add To List
        </button>
        <button
          type="button"
          onClick={() => {
            setList([]);
            setLocalStorage([]);
          }}
        >
          Delete All
        </button>
      </form>
      <div className="tasks">
        <ul>
          {list.map((task) => (
            <li
              className="task"
              key={task.id}
              onClick={markDone}
              dataid={task.id}
              style={{
                textDecoration: task.taskStatus ? "line-through" : "none",
              }}
            >
              {task.taskName}
              <button
                onClick={() => {
                  const newTasks = list.filter((job) => job.id !== task.id);
                  setLocalStorage(newTasks);
                  setList(newTasks);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
