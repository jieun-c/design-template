import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";

type Props<TData, TParams> = {
  columns: ColumnDef<TData>[];
  data?: {
    content?: TData[];
    totalElements?: number;
    totalPages?: number;
  };
  params: TParams;
  onChangeSearchParams: (search: Record<string, unknown>) => void;
};

export const useTable = <
  TData extends Record<string, any>,
  TParams extends Record<string, any>,
>({
  columns,
  data,
  params,
  onChangeSearchParams,
}: Props<TData, TParams>) => {
  // const filteredData = useMemo(() => data?.contents ?? [], [data]);
  const rowCount = useMemo(() => data?.totalElements || 0, [data]);
  const pageCount = useMemo(() => data?.totalPages || 0, [data]);

  const filteredData = useMemo(() => {
    // 맨 앞 "번호" 추가
    const contents = data?.content ?? [];
    const startIndex = (params.page ?? 0) * (params.size ?? 10);

    return contents.map((item, i) => ({
      ...item,
      index: startIndex + i + 1, // 페이지 기반 index
    }));
  }, [data, params]);

  const table = useReactTable<TData>({
    columns,
    data: filteredData,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination: {
        pageIndex: params.page,
        pageSize: params.size,
      },
    },
    onPaginationChange: (updater) => {
      const newPagination =
        typeof updater === "function"
          ? updater(table.getState().pagination)
          : updater;

      onChangeSearchParams({
        page: newPagination.pageIndex,
        size: newPagination.pageSize,
      });
    },
    manualPagination: true,
    rowCount,
    pageCount,
  });

  return { table };
};
