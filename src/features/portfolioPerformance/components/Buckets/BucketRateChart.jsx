import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import CustomLabel from './CustomLabel';
import { useMemo } from 'react';
import CustomPieTooltip from '@/components/CustomPieTooltip';

const COLORS = {
  1: '#00A98F', // Blue
  2: '#C0C0C0', // Green
  3: '#F4E13D', // Light Yellow
  4: '#FFCB59', // Yellow
  5: '#FFAE4C', // Light Orange
  6: '#F08747', // Orange
  7: '#F66143', // Light Red
  8: '#F66143', // Red
  9: '#DA0000', // Dark Gray
  10: '#626262', // Gray
};
const BucketRateChart = ({ data }) => {
  const modifiedData = useMemo(() => {
    return data?.map((item, idx) => {
      return {
        ...item,
        color: COLORS[idx + 1],
      };
    });
  }, [data]);

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
              data={modifiedData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              labelLine={false}
              label={<CustomLabel />}>
              {modifiedData?.map((entry, index) => (
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
      <div className="flex justify-center flex-wrap my-2 gap-x-4 gap-y-2">
        {modifiedData?.map((entry, index) => (
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
