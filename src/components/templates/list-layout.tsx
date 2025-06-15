type Props = {
  searchArea?: React.ReactNode;
  buttonArea?: React.ReactNode;
  tableArea?: React.ReactNode;
};

export const ListLayout = ({ searchArea, buttonArea, tableArea }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        {/* SearchArea */}
        <div className="flex gap-3 items-center">{searchArea}</div>
        {/* ButtonArea */}
        <div className="flex justify-end gap-3">{buttonArea}</div>
      </div>

      {/* TableArea */}
      <div>{tableArea}</div>
    </div>
  );
};
