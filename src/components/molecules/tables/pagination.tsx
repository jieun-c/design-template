import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { HTMLProps, useEffect, useState } from "react";
import prevGray from "@/assets/icons/prev-gray.svg";
import prevBlack from "@/assets/icons/prev-black.svg";
import nextGray from "@/assets/icons/next-gray.svg";
import nextBlack from "@/assets/icons/next-black.svg";
import { DEFAULT_PAGINATION } from "@/common/constants";

type Pagination = {
  page: number /** 현재 페이지 (0 부터 시작) */;
  size: number /** 페이지 사이즈 (rerender 감지) */;
  totalPages: number /** 끝 페이지 */;
  maxCnt?: number /** 페이징 숫자 보여질 갯수 */;
} & HTMLProps<HTMLDivElement>;

export const Pagination = ({
  page = DEFAULT_PAGINATION.PAGE,
  size = DEFAULT_PAGINATION.SIZE,
  totalPages = 1,
  maxCnt = 10,
}: Pagination) => {
  const [paginationGroup, setPaginationGroup] = useState<number[]>([]);

  useEffect(() => {
    let last = Math.ceil((page + 1) / maxCnt) * maxCnt;
    if (last > totalPages) last = totalPages;
    const first = last - (maxCnt - 1) <= 0 ? 1 : last - (maxCnt - 1);

    setPaginationGroup(
      new Array(last - first + 1).fill(undefined).map((_, i) => first + i),
    );
  }, [page, size, totalPages, maxCnt]);

  return (
    <div className="flex items-center justify-center gap-3">
      <Link
        to="."
        search={(prev: any) => ({
          ...prev,
          page: page < 1 ? prev.page : page - 1,
        })}
        className={cn(
          "text-sm leading-tight border border-gray-20 w-8 h-8 flex items-center justify-center",
          page < 1
            ? "cursor-default pointer-events-none opacity-40"
            : "cursor-pointer",
        )}
      >
        <img src={page < 1 ? prevGray : prevBlack} alt="이전" />
      </Link>

      {/* pageNumbers */}
      <div className="flex gap-2">
        {paginationGroup.map((item) => {
          return (
            <Link
              disabled={page === item - 1}
              key={`page-${item}`}
              to="."
              search={(prev: any) => ({
                ...prev,
                page: page === item - 1 ? prev.page : item - 1,
              })}
              className={`w-8 h-8 justify-center flex items-center text-sm leading-tight ${
                page === item - 1
                  ? "bg-gray-50 cursor-default"
                  : "border-gray-20 border bg-white "
              }`}
            >
              <p
                className={cn(
                  page === item - 1 ? "text-white" : "text-slate-800",
                )}
              >
                {item}
              </p>
            </Link>
          );
        })}
      </div>

      <Link
        className={cn(
          "text-sm leading-tight border border-gray-20 w-8 h-8 flex items-center justify-center",
          page + 1 >= totalPages
            ? "cursor-default pointer-events-none opacity-40"
            : "cursor-pointer",
        )}
        to="."
        search={(prev: any) => ({
          ...prev,
          page: page + 1 >= totalPages ? prev.page : page + 1,
        })}
      >
        <img src={page + 1 >= totalPages ? nextGray : nextBlack} alt="다음" />
      </Link>
    </div>
  );
};
