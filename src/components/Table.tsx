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
    <div className="p-2 md:p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-navy-900/10 text-xs uppercase tracking-wider text-gold-600 dark:border-white/10 dark:text-gold">
              {columns.map((column) => (
                <th key={column.header} className="px-4 py-3 font-semibold">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm text-navy-900 dark:text-white/80">
            {displayedData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-navy-900/5 transition hover:bg-gold/10 dark:border-white/5"
              >
                {columns.map((column) => (
                  <td key={column.header} className="whitespace-nowrap px-4 py-3">
                    {(row[column.accessor] as unknown) as React.ReactNode}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className="rounded-full border border-navy-900/10 bg-transparent px-3 py-2 text-sm dark:border-white/15 dark:text-white"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
        <div className="flex gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy-950 disabled:opacity-40"
          >
            Previous
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy-950 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
      <p className="mt-2 text-sm text-navy-900/60 dark:text-white/60">
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
};

export default Table;
