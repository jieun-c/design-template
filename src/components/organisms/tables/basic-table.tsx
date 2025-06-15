import { Suspense } from "react";
import { Table } from "@tanstack/react-table";
import { CommonTable } from "@/components/molecules/tables/common-table";
import { Pagination } from "@/components/molecules/tables/pagination";

type Props<TData> = {
  table: Table<TData>;
  params: any;
  onChangeSearchParams?: (search: Record<string, unknown>) => void;
  onRowClick?: (row: TData) => void;
};

export const BasicTable = <TData extends Record<string, any>>({
  table,
  params,
  onRowClick,
}: Props<TData>) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="flex flex-col justify-center gap-4">
        <div className="overflow-x-auto">
          <CommonTable table={table} onRowClick={onRowClick} />
        </div>

        <div className="flex justify-center items-center gap-3">
          <Pagination
            page={params.page}
            size={params.size}
            totalPages={table.getPageCount() || 1}
          />
          {/*<div className="w-[120px]">*/}
          {/*  <PageSize*/}
          {/*    selectedValue={`${params.size}`}*/}
          {/*    onChange={(selected) => {*/}
          {/*      onChangeSearchParams({ size: selected.value });*/}
          {/*    }}*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>
    </Suspense>
  );
};
