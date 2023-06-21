import React from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul>
      {pageNumbers.map((number) => (
        <li key={number}>
          <a onClick={() => paginate(number)}>{number}</a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
