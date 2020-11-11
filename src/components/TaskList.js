import React from "react";

function TaskItem({ title, completed }) {
  return (
    <li>
      <input type="checkbox" checked={completed} />
      <p>{title}</p>
      <span>
        <button>Clone</button>
        <button>X</button>
      </span>
    </li>
  );
}

function TaskList({ tasks }) {
  return (
    <ul className="TaskList">
      {tasks.map(({ id, title, completed }) => (
        <TaskItem key={id} title={title} completed={completed} id={id} />
      ))}
    </ul>
  );
}

export default TaskList;
