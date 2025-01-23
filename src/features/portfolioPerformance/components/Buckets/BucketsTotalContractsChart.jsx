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
const barData2 = [
  { name: 'Current', value: 20 },
  { name: 'Grace period', value: 15 },
  { name: 'Bucket 1', value: 40 },
  { name: 'Bucket 2', value: 40 },
  { name: 'Bucket 3', value: 15 },
  { name: 'Bucket 4', value: 12 },
  { name: 'Bucket 5', value: 10 },
  { name: 'Bucket 6', value: 8 },
  { name: 'Write off', value: 10 },
  { name: 'Closed', value: 5 },
];
const COLORS2 = {
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

const BucketsTotalContractsChart = () => {
  return (
    <div
      className="h-64 "
      dir="ltr">
      <ResponsiveContainer
        width="100%"
        height="100%">
        <BarChart
          data={barData2}
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
            {barData2.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS2[entry.name.toLowerCase().replace(' ', '')]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BucketsTotalContractsChart;
