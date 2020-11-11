import React, {useState} from "react";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import data from './tasks.json';
import {useTasks} from "./hooks/pagination";

function App() {
  const { tasks, pagination, search } = useTasks();
  return (
    <section>
      <h1>Que quieres hacer hoy?</h1>
      <input placeholder="Search here" onKeyPress={e => {
        if (e.code === 'Enter') {
          search.setSearch(e.target.value);
          pagination.reset()
        }
      }} />
      <input placeholder="Comprar leche" />
      <TaskList tasks={tasks.pageTasks} />
      <Footer
        tasks={tasks}
        pagination={pagination}
      />
    </section>
  );
}

export default App;
