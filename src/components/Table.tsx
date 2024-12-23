import React, { useState } from 'react';

interface TableProps<T> {
  data: T[];
  columns: { header: string; accessor: keyof T }[];
}

const Table = <T,>({ data, columns }: TableProps<T>) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const displayedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="p-4">
      <table className="min-w-full dark:bg-gray-900  border border-gray-200 rounded-lg shadow">
        <thead>
          <tr className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white uppercase text-sm leading-normal">
            {columns.map((column) => (
              <th key={column.header} className="py-3 px-6 text-left">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white text-sm font-light">
          {displayedData.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-200 hover:bg-gray-100 hover:text-gray-900 hover:font-semibold hover:cursor-pointer">
              {columns.map((column) => (
                <td key={column.header} className="py-3 px-6 text-left whitespace-nowrap">
                  {(row[column.accessor] as unknown) as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
        <div>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      <p className="text-gray-900 dark:text-gray-50 font-semibold mt-2">
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
};

export default Table;
