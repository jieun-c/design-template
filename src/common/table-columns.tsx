import { ColumnDef } from "@tanstack/react-table";

type User = {
  userId: string;
  firstName: string;
  lastName: string;
  age: number;
};

// 컬럼 정의
export const sampleColumns: ColumnDef<User, any>[] = [
  {
    id: "id", // 고유한 열 ID
    accessorKey: "userId", // 데이터에서 값을 가져올 때 사용하는 키
    header: "사용자 ID", // 헤더에 표시될 내용
    footer: "총 사용자 수", // 푸터에 표시될 내용
    size: 10,
    cell: (info) => {
      return `ID_ ${info.getValue()}`; // 각 셀에 표시될 내용 (custom rendering)
    },
    meta: { isEditable: true }, // 추가적인 메타 데이터 (예: 편집 가능 여부)
  },
  {
    id: "fullName",
    accessorFn: (row) => `${row.firstName} ${row.lastName}`, // 함수를 사용하여 값 추출
    header: "이름",
    cell: (info) => <span style={{ color: "blue" }}>{info.getValue()}</span>, // 스타일 적용
  },
  {
    id: "age",
    accessorKey: "age",
    header: "나이",
    cell: (info) => `${info.getValue()}세`, // 단위 추가
  },
  {
    id: "phone",
    accessorKey: "phone",
    header: "전화번호",
  },
  {
    id: "email",
    accessorKey: "email",
    header: "이메일",
  },
];
