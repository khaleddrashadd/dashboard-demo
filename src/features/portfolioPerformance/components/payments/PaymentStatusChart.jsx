import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import CustomPieTooltip from './CustomPieTooltip';

const PaymentStatusChart = () => {
  // Mock data for the satisfaction pie chart
  const satisfactionData = [
    { name: 'سداد كلي', value: 27, color: '#6FD195' },
    { name: 'لم تسدد', value: 60, color: '#0095FF' },
    { name: 'سداد جزئي', value: 13, color: '#FFAE4C' },
  ];

  return (
    <div className="w-full">
      <div className="h-80">
        <ResponsiveContainer
          width="100%"
          height="100%">
          <PieChart>
            <Pie
              data={satisfactionData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={130}
              labelLine={false}
              label={<CustomLabel />}
              dataKey="value">
              {satisfactionData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  style={{
                    transformOrigin: 'center',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomPieTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* legends */}
      <div className="flex justify-center gap-4 mb-2">
        {satisfactionData.map((entry, index) => (
          <div
            key={`legend-${index}`}
            className="flex items-center gap-2 cursor-pointer">
            <div
              className="w-3 h-3 rounded-full mr-2 transition-opacity duration-300"
              style={{
                backgroundColor: entry.color,
              }}
            />
            <span className="text-sm transition-opacity duration-300">
              {entry.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
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

export default PaymentStatusChart;
