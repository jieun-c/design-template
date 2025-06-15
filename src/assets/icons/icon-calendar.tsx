type Props = {
  width?: number;
  height?: number;
  color?: string;
};

export const CalendarIcon = ({
  width = 24,
  height = 24,
  color = "#475569",
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-grow-0 flex-shrink-0 w-6 h-6 relative`}
      preserveAspectRatio="none"
    >
      <path d="M8.63971 3.5166V6.50328" stroke={color} strokeWidth="1.30667" />
      <path d="M15.359 3.5166V6.50328" stroke={color} strokeWidth="1.30667" />
      <path
        d="M18.2529 6.7832V6.12987H17.5996H6.3996H5.74626V6.7832V9.02322V17.9833V18.6366H6.3996H17.5996H18.2529V17.9833V6.7832Z"
        stroke={color}
        strokeWidth="1.30667"
      />
      <rect
        x="8.2663"
        y="11.2634"
        width="1.49333"
        height="1.49334"
        fill={color}
      />
      <rect
        x="11.2532"
        y="11.2634"
        width="1.49333"
        height="1.49334"
        fill={color}
      />
      <rect
        x="14.24"
        y="11.2634"
        width="1.49333"
        height="1.49334"
        fill={color}
      />
      <rect
        x="14.24"
        y="14.2502"
        width="1.49333"
        height="1.49334"
        fill={color}
      />
      <rect
        x="11.2532"
        y="14.2502"
        width="1.49333"
        height="1.49334"
        fill={color}
      />
      <rect
        x="8.2663"
        y="14.2502"
        width="1.49333"
        height="1.49334"
        fill={color}
      />
      <path d="M6.3996 9.1167H17.5996" stroke={color} strokeWidth="1.30667" />
    </svg>
  );
};
