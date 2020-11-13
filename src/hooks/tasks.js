import {useState, createContext, useContext} from "react";
import data from "../tasks.json";

const pageSize = 10;

const getLastId = tasks => Math.max(...tasks.map(x => x.id));

const useTaskState = () => {
  const [tasks, setTasks] = useState(data.tasks);
  const [id, setId] = useState(getLastId(data.tasks) + 1);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');

  const matchingTasks = tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()));
  const lastPage = Math.ceil(matchingTasks.length / pageSize);
  const pageTasks = matchingTasks.slice(page * pageSize, (page + 1) * pageSize);
  const leftToComplete = tasks.filter(x => !x.completed).length;
  const cleanCompleted = () => {
    const tasksToKeep = tasks.filter(task => !task.completed);
    setTasks(tasksToKeep);
  };
  const addTask = title => {
    const task = { id , title, completed: false };
    setTasks([task, ...tasks]);
    setId(id + 1);
  };
  const paginationReset = () => setPage(0);
  const doSearch = text => {
    setSearch(text);
    paginationReset()
  };
  const switchCompletedOfTask = id => {
    // 1. find the task with this id in the array of tasks
    const task = tasks.find(x => x.id === id);
    // 2. change the completed of that task
    task.completed = !task.completed;
    // 3. notify react that the array of tasks has changed, so it will render it again ("[... ]")
    setTasks([...tasks]);
  };
  const markAllAsDone = () => {
    const newTasks = tasks.map(task => ({...task, completed: true}));
    setTasks(newTasks);
  }
  const deleteTask = id => {
    const tasksToKeep = tasks.filter(x => x.id !== id);
    setTasks(tasksToKeep);
  }
  return  {
    search: {
      doSearch: doSearch,
    },
    tasks: {
      leftToComplete,
      taskList: tasks,
      matchingTasks,
      pageTasks,
      cleanCompleted,
      markAllAsDone,
      addTask,
      switchCompletedOfTask,
      deleteTask,
    },
    pagination: {
      pageSize,
      lastPage,
      page,
      isLastPage: page === lastPage,
      isFirstPage: page === 0,
      nextPage: () => {
        if (page + 1 < lastPage) { // "it's not the last page
          setPage(page + 1);
        }
      },
      prevPage: () => {
        if (page > 0) {
          setPage(page - 1);
        }
      },
      reset: paginationReset,
    }
  }
};

const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const taskState = useTaskState();
  return (<TaskContext.Provider value={taskState}>
    {children}
  </TaskContext.Provider>)
}

export const useTasks = () => {
  return useContext(TaskContext);
};
