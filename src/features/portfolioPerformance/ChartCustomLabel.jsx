const ChartCustomLabel = ({ entry, index, data }) => {
  const labelRadius = 140;
  const RADIAN = Math.PI / 180;

  const midAngle =
    (index * ((360 / data.length) * 2) + 2800 / data.length / 3) * RADIAN;

  const endX = Math.cos(midAngle) * labelRadius + 230;
  const endY = Math.sin(midAngle) * labelRadius + 170;

  return (
    <g key={`label-group-${index}`}>
      <text
        x={endX}
        y={endY}
        textAnchor={endX > 200 ? 'start' : 'end'}
        dominantBaseline="middle"
        fill={entry.color}
        className="text-sm font-bold"
        dx={endX > 200 ? 5 : -5}>
        {`${entry.value}%`}
      </text>
    </g>
  );
};

export default ChartCustomLabel;
