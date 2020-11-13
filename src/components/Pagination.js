import React from "react";
import {useTasks} from "../hooks/tasks";

export const Pagination = () => {
  const {pagination} = useTasks();
  return (<div>
    {!pagination.isFirstPage && <button onClick={pagination.prevPage}>
      Prev
    </button>}
    <span>
          Page {pagination.page + 1} out of {pagination.lastPage}
        </span>
    <button onClick={pagination.nextPage}>
      Next
    </button>
  </div>);
}
