import { useMemo } from 'react';
import {
  Bar,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
} from 'recharts';
import CustomBarTooltip from '../../components/CustomBarTooltip';
const COLORS = {
  1: '#00A98F', // Blue
  2: '#C0C0C0', // Green
  3: '#F4E13D', // Light Yellow
  4: '#FFCB59', // Yellow
  5: '#FFAE4C', // Light Orange
  6: '#F08747', // Orange
  7: '#F66143', // Light Red
  8: '#F03C3C', // Red
  9: '#DA0000', // Dark Gray
  10: '#626262', // Gray
};
const dataBarChart = [
  { name: 'Current', value: 118 },
  { name: 'Grace period', value: 90 },
  { name: 'Bucket 1', value: 70 },
  { name: 'Bucket 2', value: 50 },
  { name: 'Bucket 3', value: 40 },
  { name: 'Bucket 4', value: 30 },
  { name: 'Bucket 5', value: 20 },
  { name: 'Bucket 6', value: 15 },
  { name: 'Write off', value: 10 },
  { name: 'Closed', value: 5 },
];

const ContractsStatusesChart = ({ setSelectedBucket }) => {
  const modifiedData2 = useMemo(() => {
    return dataBarChart?.map((item, idx) => {
      return {
        ...item,
        color: COLORS[idx + 1],
      };
    });
  }, []);
  const handleBarClick = (data) => {
    setSelectedBucket((prev) => (prev === data.name ? null : data.name));
  };
  return (
    <div className="w-full p-3">
      <div
        className="h-64"
        dir="ltr">
        <ResponsiveContainer
          width="100%"
          height="100%">
          <BarChart
            data={modifiedData2}
            margin={{ right: 30 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={true}
              vertical={false}
            />

            <XAxis
              dataKey="name"
              tick={{
                fontSize: 12,
                textAnchor: 'middle',
                fontWeight: 600,
              }}
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
              onClick={handleBarClick}
              radius={[4, 4, 0, 0]}
              barSize={50}>
              {modifiedData2?.map((entry, index) => (
                <Cell
                  onClick={() => console.log('first')}
                  key={`cell-${index}`}
                  fill={entry.color}
                  opacity={0.8}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ContractsStatusesChart;
