import React from "react";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import {useTasks} from "./hooks/tasks";
import {Pagination} from "./components/Pagination";

function App() {
  const { tasks, search } = useTasks();
  return (
    <section>
      <h1>Que quieres hacer hoy?</h1>
      <button onClick={tasks.markAllAsDone}>Mark all as done</button>
      <input placeholder="Search here" onKeyPress={e => {
        if (e.code === 'Enter') {
          search.doSearch(e.target.value);
        }
      }} />
      <input placeholder="Comprar leche" onKeyPress={e => {
        if (e.code === 'Enter') {
          tasks.addTask(e.target.value);
        }
      }} />
      <TaskList />
      <Footer />
    </section>
  );
}

export default App;
