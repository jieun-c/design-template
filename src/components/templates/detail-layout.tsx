type Props = {
  title: string;
  contentArea?: React.ReactNode;
};

export const DetailLayout = ({ title, contentArea }: Props) => {
  return (
    <div className="m-auto w-lg">
      <h1 className="text-3xl font-semibold text-gray-90 text-center pt-6 pb-8">
        {title}
      </h1>
      <div className="flex flex-col gap-4">{contentArea}</div>
    </div>
  );
};
