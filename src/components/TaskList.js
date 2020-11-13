import React from "react";
import {useTasks} from "../hooks/tasks";

function TaskItem({ title, completed, id }) {
  const {tasks} = useTasks();
  const handleCheckboxClick = () => {
    tasks.switchCompletedOfTask(id);
  }
  const handleRemoveTaskClick = () => {
    tasks.deleteTask(id);
  }
  return (
    <li>
      <input type="checkbox" checked={completed} onClick={handleCheckboxClick} />
      <p>{title}</p>
      <span>
        <button onClick={() => tasks.addTask('Copy of ' + title)}>Clone</button>
        <button onClick={handleRemoveTaskClick}>X</button>
      </span>
    </li>
  );
}

function TaskList() {
  const {tasks} = useTasks();
  return (
    <ul className="TaskList">
      {tasks.pageTasks.map(task => (
        <TaskItem key={task.id} {...task} />
      ))}
    </ul>
  );
}

export default TaskList;
