import React from "react";
import {Pagination} from "./Pagination";

const pageSize = 10;

function Footer({ tasks, pagination }) {
  return (
    <footer>
      <div>
        <strong>{tasks.leftToComplete}</strong> tasks left.
      </div>
      <div>
        <button>Load More</button>
        <button>Clean Completed</button>
      </div>
      <Pagination pagination={pagination} />
    </footer>
  );
}

export default Footer;
