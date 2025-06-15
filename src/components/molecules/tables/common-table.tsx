import { flexRender, Table } from "@tanstack/react-table";

type Props<TData> = {
  table: Table<TData>;
  onRowClick?: (row: TData) => void;
};

export const CommonTable = <TData extends Record<string, any>>({
  table,
  onRowClick,
}: Props<TData>) => {
  //* h-[524px] => 48px * 10 + 52px
  return (
    <table className="min-w-[1000px] w-full h-[524px] border-gray-10 border-1">
      <thead className="h-13 border-b-1 border-gray-30">
        {table.getHeaderGroups().map((headerGroup) => {
          return (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  // style={{ width: `${header.getSize()}px` }}
                  className="px-4 bg-gray-10 text-sm font-semibold text-gray-90 text-center truncate"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          );
        })}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            onClick={() => onRowClick?.(row.original)}
            className="h-[48px] border-b border-gray-10 hover:bg-gray-10 cursor-pointer"
          >
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className="border-r-1 border-gray-10 px-4 text-sm font-medium text-gray-80 text-center truncate"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
        {/* 빈 줄 추가 */}
        {Array.from({ length: 10 - table.getRowModel().rows.length }).map(
          (_, index) => (
            <tr
              key={`empty-${index}`}
              className="h-[48px] px-4 border-b border-gray-10"
            >
              {table.getAllLeafColumns().map((_column, colIdx) => (
                <td key={colIdx} className="border-r-1 border-gray-10">
                  &nbsp;
                </td>
              ))}
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};
