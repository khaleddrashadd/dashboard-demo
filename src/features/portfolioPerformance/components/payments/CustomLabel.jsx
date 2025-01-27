const CustomLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  value,
  fill,
  opacity,
}) => {
  const RADIAN = Math.PI / 180;
  // Calculate the position for the label, pushing it further out
  const radius = outerRadius * 1.3; // Increased to match reference image
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  // Calculate line start point (at pie edge)
  const lineStart = {
    x: cx + outerRadius * Math.cos(-midAngle * RADIAN),
    y: cy + outerRadius * Math.sin(-midAngle * RADIAN),
  };

  // Determine text anchor based on position
  const textAnchor = x > cx ? 'start' : 'end';

  // Create dotted line effect

  return (
    <g>
      {/* Dotted line */}
      <line
        x1={lineStart.x}
        y1={lineStart.y}
        x2={x}
        y2={y}
        stroke={fill}
        strokeWidth={1}
        opacity={opacity}
        strokeDasharray="3,3" // Creates dotted line effect
      />
      {/* Label */}
      <text
        x={x + (x > cx ? 30 : -30)} // Add small padding
        y={y}
        textAnchor={textAnchor}
        fill={fill}
        dominantBaseline="middle"
        className="text-xs font-semibold"
        opacity={opacity}>
        {`${value}%`}
      </text>
    </g>
  );
};

export default CustomLabel;
