import { useState } from "react";

export const ToDoList = function () {
  const [list, setList] = useState([]);

  const addTaskToList = function (e) {
    const task = e.target.parentElement.querySelector("#taskInput");
    list.push({ taskName: task.value, id: crypto.randomUUID() });
    task.value = "";
    setList([...list]);
  };

  const markDone = (e) => {
    if (e.target.style.textDecoration === "line-through") {
      e.target.style.textDecoration = "none";
      return;
    }
    e.target.style.textDecoration = "line-through";
  };

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
          }}
        >
          Delete All
        </button>
      </form>
      <div className="tasks">
        <ul>
          {list.map((task) => (
            <li key={task.id} onClick={markDone}>
              {task.taskName}
              <button
                onClick={() =>
                  setList(list.filter((job) => job.id !== task.id))
                }
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
