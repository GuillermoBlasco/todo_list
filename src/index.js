import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {TaskContextProvider} from "./hooks/tasks";
import {Pagination} from "./components/Pagination";

ReactDOM.render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
