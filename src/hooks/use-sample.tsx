import { useQuery } from "@tanstack/react-query";

type DataType = {
  content: {
    userId: string;
    firstName: string;
    lastName: string;
    age: number;
  }[];
  totalElements: number;
  totalPages: number;
};

type Props = {
  params: any;
};

export const useSample = ({ params }: Props) => {
  // 데이터 호출
  const { data, isLoading } = useQuery<DataType>({
    queryKey: ["data", { ...params }],
    queryFn: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          const data: DataType = {
            content: Array.from({ length: 100 }, (_, index) => ({
              userId: (index + 1).toString(),
              firstName: "홍",
              lastName: "길동",
              age: 20,
              phone: "010-1234-5678",
              email: `hong${index + 1}@gmail.com`,
            })),
            totalElements: 100,
            totalPages: 10,
          };

          // params 의 page 와 size 를 사용하여 데이터 자르기
          const start = params.page * params.size;
          const end = start + params.size;
          const slicedData = data.content.slice(start, end);

          resolve({ ...data, content: slicedData });
        }, 300);
      }),
  });

  return { data, isLoading, params };
};
