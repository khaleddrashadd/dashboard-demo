import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import CustomBarTooltip from './CustomBarTooltip';
import { useMemo } from 'react';

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

const BucketsTotalContractsChart = ({ data }) => {
  const modifiedData = useMemo(() => {
    return data?.map((item, idx) => {
      return {
        ...item,
        color: COLORS[idx + 1],
      };
    });
  }, [data]);
  return (
    <div
      className="h-64 "
      dir="ltr">
      <ResponsiveContainer
        width="100%"
        height="100%">
        <BarChart
          data={modifiedData}
          margin={{ right: 30 }}>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 10, angle: -45, textAnchor: 'end' }}
            interval={0}
            height={60}
            tickLine={false}
          />
          <YAxis tickLine={false} />
          <Tooltip
            content={<CustomBarTooltip />}
            cursor={{ fill: '#00619d', opacity: 0.1 }}
          />
          <Bar
            dataKey="value"
            radius={[4, 4, 0, 0]}>
            {modifiedData?.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BucketsTotalContractsChart;
