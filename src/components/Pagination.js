import React from "react";

export const Pagination = ({ pagination }) => {
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
