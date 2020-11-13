import React from "react";
import {Pagination} from "./Pagination";
import {TaskContextProvider, useTasks} from "../hooks/tasks";

function Footer() {
  const { tasks } = useTasks();
  return (
    <footer>
      <div>
        <strong>{tasks.leftToComplete}</strong> tasks left.
      </div>
      <div>
        <button onClick={tasks.cleanCompleted}>Clean Completed</button>
      </div>
      <Pagination/>
    </footer>
  );
}

export default Footer;
