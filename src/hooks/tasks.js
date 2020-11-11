import {useState} from "react";
import data from "../tasks.json";

const pageSize = 10;

export const useTasks = () => {
  const [tasks, setTasks] = useState(data.tasks);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const matchingTasks = tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()));
  const lastPage = Math.ceil(matchingTasks.length / pageSize);
  const pageTasks = matchingTasks.slice(page * pageSize, (page + 1) * pageSize);
  const leftToComplete = tasks.filter(x => !x.completed).length;
  return  {
    search: {
      value: search,
      setSearch,
    },
    tasks: {
      leftToComplete,
      taskList: tasks,
      matchingTasks,
      pageTasks,
      setTasks,
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
      reset: () => setPage(0),
    }
  }
};
