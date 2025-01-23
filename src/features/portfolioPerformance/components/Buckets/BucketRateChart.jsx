import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import CustomLabel from './CustomLabel';

const BucketRateChart = () => {
  const COLORS = {
    current: '#00A98F', // Blue
    graceperiod: '#C0C0C0', // Green
    bucket1: '#F4E13D', // Light Yellow
    bucket2: '#FFCB59', // Yellow
    bucket3: '#FFAE4C', // Light Orange
    bucket4: '#F08747', // Orange
    bucket5: '#F66143', // Light Red
    bucket6: '#F66143', // Red
    writeoff: '#DA0000', // Dark Gray
    closed: '#626262', // Gray
  };

  const pieData = [
    { name: 'Current', value: 26.43, color: COLORS.current },
    { name: 'Grace period', value: 6.43, color: COLORS.graceperiod },
    { name: 'Bucket 1', value: 18.02, color: COLORS.bucket1 },
    { name: 'Bucket 2', value: 12.91, color: COLORS.bucket2 },
    { name: 'Bucket 3', value: 8.41, color: COLORS.bucket3 },
    { name: 'Bucket 4', value: 5.11, color: COLORS.bucket4 },
    { name: 'Bucket 5', value: 2.8, color: COLORS.bucket5 },
    { name: 'Bucket 6', value: 0.1, color: COLORS.bucket6 },
    { name: 'Write off', value: 6.43, color: COLORS.writeoff },
    { name: 'Closed', value: 3.0, color: COLORS.closed },
  ];

  const CustomPieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border rounded shadow-lg">
          <p
            className="text-sm"
            style={{ color: payload[0].payload.color }}>
            {payload[0].name}: {payload[0].value.toFixed(2)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      <div
        dir="ltr"
        className="h-80">
        <ResponsiveContainer
          width="100%"
          height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              labelLine={false}
              label={<CustomLabel />}>
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  style={{
                    transformOrigin: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </Pie>

            <Tooltip content={<CustomPieTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center flex-wrap my-2 gap-x-4 gap-y-2">
        {pieData.map((entry, index) => (
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

export default BucketRateChart;
