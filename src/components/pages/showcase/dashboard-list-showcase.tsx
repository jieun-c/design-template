import { Route } from "@/routes/_dashboard/list";
import { Link, useRouter } from "@tanstack/react-router";
import { useSample } from "@/hooks/use-sample";
import { useTable } from "@/hooks/use-table";
import { BasicTable } from "@/components/organisms/tables/basic-table";
import { sampleColumns as columns } from "@/common/table-columns";
import { DEFAULT_PAGINATION } from "@/common/constants";
import { ListLayout } from "@/components/templates/list-layout";
import { Button } from "@/components/atom/button";
import { TextField } from "@/components/molecules/text-field";
import { useEffect, useState } from "react";
import { Label } from "@/components/atom/label";
import { CalendarRange } from "@/components/atom/calendar-range";

export const DashboardListShowcase = () => {
  ///////////////////////////라우터/////////////////////////////////////
  const params = Route.useSearch();
  const router = useRouter();

  const onChangeSearchParams = (search: Record<string, unknown>) => {
    router.navigate({
      from: Route.fullPath,
      search: (prev: any) => ({
        ...prev,
        page: DEFAULT_PAGINATION.PAGE,
        size: DEFAULT_PAGINATION.SIZE,
        ...search,
      }),
    });
  };

  ///////////////////////////데이터/////////////////////////////////////
  const { data } = useSample({ params });

  ///////////////////////////테이블/////////////////////////////////////
  const { table } = useTable({ columns, data, params, onChangeSearchParams });

  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(params.keyword ?? "");
  }, [params.keyword]);

  return (
    <ListLayout
      searchArea={
        <>
          {/* 검색조건 */}
          <TextField
            label="검색"
            direction="row"
            placeholder="검색어를 입력해주세요."
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                onChangeSearchParams({ keyword: value });
              }
            }}
            className="min-w-60"
          />

          {/* 등록일 */}
          <div className="flex items-center gap-3">
            <Label label="기간" />
            <CalendarRange
              startProps={{
                selected: params.startDate ?? "",
                onChange: (date: string | null) => {
                  onChangeSearchParams({ startDate: date || "" });
                },
              }}
              endProps={{
                selected: params.endDate ?? "",
                onChange: (date: string | null) => {
                  onChangeSearchParams({ endDate: date || "" });
                },
              }}
            />
          </div>

          {/* 검색버튼 */}
          <Button onClick={() => onChangeSearchParams({ keyword: value })}>
            검색
          </Button>
        </>
      }
      buttonArea={
        <div>
          <Link to="/detail">
            <Button>등록하기</Button>
          </Link>
        </div>
      }
      tableArea={
        <BasicTable
          table={table}
          params={params}
          onChangeSearchParams={onChangeSearchParams}
          onRowClick={(row) => {
            console.log(row);
          }}
        />
      }
    />
  );
};
