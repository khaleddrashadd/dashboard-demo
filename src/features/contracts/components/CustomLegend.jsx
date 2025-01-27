const CustomLegend = (props) => {
  const { payload } = props;
  return (
    <div className="flex items-center gap-4 justify-center flex-wrap">
      {payload?.map((entry, index) => (
        <div
          key={`legend-${index}`}
          className="flex items-center gap-1">
          <div className="mr-2 duration-300">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none">
              <rect
                y="7"
                width="16"
                height="2"
                fill={entry.color}
              />
              <circle
                opacity="0.25"
                cx="8"
                cy="8"
                r="8"
                fill={entry.color}
              />
              <circle
                cx="8"
                cy="8"
                r="3.5"
                fill={entry.color}
                stroke="white"
              />
            </svg>
          </div>
          <span className="text-sm transition-opacity duration-300">
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};
export default CustomLegend;
