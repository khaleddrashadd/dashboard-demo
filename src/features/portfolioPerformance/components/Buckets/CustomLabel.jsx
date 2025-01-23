const CustomLabel = ({ cx, cy, midAngle, outerRadius, value, color }) => {
  const RADIAN = Math.PI / 180;
  // Calculate the position for the label, pushing it further out
  const radius = outerRadius * 1.3; // Increased to match reference image
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const cos = Math.cos(-midAngle * RADIAN);
  const sin = Math.sin(-midAngle * RADIAN);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <line
        x1={sx}
        y1={sy}
        x2={mx}
        y2={my}
        stroke={color}
        strokeWidth={1}
        strokeDasharray="3,3" // Creates dotted line effect
      />
      {/* Label */}
      <text
        x={x + (x > cx ? 5 : -5)} // Add small padding
        y={y}
        textAnchor={textAnchor}
        fill={color}
        dominantBaseline="middle"
        className="text-xs font-semibold">
        {`${value.toFixed(2)}%`}
      </text>
    </g>
  );
};
export default CustomLabel;
