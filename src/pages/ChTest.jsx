import { useMemo, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';
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
const buckets = [
  { name: 'Current', color: '#00A98F' },
  { name: 'Grace period', color: '#C0C0C0' },
  { name: 'Bucket 1', color: '#F4E13D' },
  { name: 'Bucket 2', color: '#FFCB59' },
  { name: 'Bucket 3', color: '#FFAE4C' },
  { name: 'Bucket 4', color: '#F08747' },
  { name: 'Bucket 5', color: '#F66143' },
  { name: 'Bucket 6', color: '#F03C3C' },
  { name: 'Write off', color: '#DA0000' },
  { name: 'Closed', color: '#626262' },
];

const dataLineChart = [
  {
    month: 'Jan',
    Current: 310,
    'Grace period': 85,
    'Bucket 1': 55,
    'Bucket 2': 42,
    'Bucket 3': 32,
    'Bucket 4': 22,
    'Bucket 5': 12,
    'Bucket 6': 9,
    'Write off': 7,
    Closed: 3,
  },
  {
    month: 'Feb',
    Current: 210,
    'Grace period': 95,
    'Bucket 1': 65,
    'Bucket 2': 52,
    'Bucket 3': 42,
    'Bucket 4': 32,
    'Bucket 5': 22,
    'Bucket 6': 17,
    'Write off': 15,
    Closed: 8,
  },
  {
    month: 'Mar',
    Current: 300,
    'Grace period': 105,
    'Bucket 1': 75,
    'Bucket 2': 62,
    'Bucket 3': 52,
    'Bucket 4': 42,
    'Bucket 5': 32,
    'Bucket 6': 28,
    'Write off': 25,
    Closed: 13,
  },
  {
    month: 'Apr',
    Current: 300,
    'Grace period': 115,
    'Bucket 1': 85,
    'Bucket 2': 72,
    'Bucket 3': 62,
    'Bucket 4': 52,
    'Bucket 5': 42,
    'Bucket 6': 35,
    'Write off': 35,
    Closed: 18,
  },
  {
    month: 'May',
    Current: 195,
    'Grace period': 125,
    'Bucket 1': 95,
    'Bucket 2': 82,
    'Bucket 3': 72,
    'Bucket 4': 62,
    'Bucket 5': 52,
    'Bucket 6': 45,
    'Write off': 45,
    Closed: 23,
  },
  {
    month: 'Jun',
    Current: 220,
    'Grace period': 115,
    'Bucket 1': 85,
    'Bucket 2': 72,
    'Bucket 3': 62,
    'Bucket 4': 52,
    'Bucket 5': 42,
    'Bucket 6': 35,
    'Write off': 35,
    Closed: 18,
  },
  {
    month: 'Jul',
    Current: 330,
    'Grace period': 105,
    'Bucket 1': 75,
    'Bucket 2': 62,
    'Bucket 3': 52,
    'Bucket 4': 42,
    'Bucket 5': 32,
    'Bucket 6': 25,
    'Write off': 25,
    Closed: 13,
  },
  {
    month: 'Aug',
    Current: 250,
    'Grace period': 95,
    'Bucket 1': 65,
    'Bucket 2': 52,
    'Bucket 3': 42,
    'Bucket 4': 32,
    'Bucket 5': 22,
    'Bucket 6': 15,
    'Write off': 15,
    Closed: 8,
  },
  {
    month: 'Sep',
    Current: 300,
    'Grace period': 115,
    'Bucket 1': 85,
    'Bucket 2': 72,
    'Bucket 3': 62,
    'Bucket 4': 52,
    'Bucket 5': 42,
    'Bucket 6': 35,
    'Write off': 35,
    Closed: 18,
  },
  {
    month: 'Oct',
    Current: 320,
    'Grace period': 125,
    'Bucket 1': 95,
    'Bucket 2': 82,
    'Bucket 3': 72,
    'Bucket 4': 62,
    'Bucket 5': 52,
    'Bucket 6': 45,
    'Write off': 45,
    Closed: 23,
  },
  {
    month: 'Nov',
    Current: 300,
    'Grace period': 105,
    'Bucket 1': 75,
    'Bucket 2': 62,
    'Bucket 3': 52,
    'Bucket 4': 42,
    'Bucket 5': 32,
    'Bucket 6': 70,
    'Write off': 25,
    Closed: 13,
  },
  {
    month: 'Dec',
    Current: 370,
    'Grace period': 115,
    'Bucket 1': 85,
    'Bucket 2': 72,
    'Bucket 3': 62,
    'Bucket 4': 52,
    'Bucket 5': 42,
    'Bucket 6': 50,
    'Write off': 35,
    Closed: 18,
  },
];

const ChartComponent = () => {
  const [selectedBucket, setSelectedBucket] = useState(null);

  const modifiedData = useMemo(() => {
    return dataLineChart?.map((item, idx) => {
      return {
        ...item,
        color: COLORS[idx + 1],
      };
    });
  }, []);
  const modifiedData2 = useMemo(() => {
    return dataBarChart?.map((item, idx) => {
      return {
        ...item,
        color: COLORS[idx + 1],
      };
    });
  }, []);
  console.log(modifiedData);
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      if (selectedBucket) {
        const selectedPayload = payload.find(
          (entry) =>
            entry.dataKey.toLowerCase().split(' ').join('') ===
            selectedBucket.toLowerCase().split(' ').join('')
        );
        if (selectedPayload) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${label} : ${selectedPayload.value}`}</p>
            </div>
          );
        }
      } else {
        return (
          <div className="custom-tooltip">
            {payload.map((entry, index) => (
              <p
                key={`tooltip-${index}`}
                className="label">{`${entry.dataKey} : ${entry.value}`}</p>
            ))}
          </div>
        );
      }
    }
    return null;
  };
  // const CustomDot = (props) => {
  //   const { cx, cy, payload, stroke, opacity } = props;
  //   console.log(opacity);

  //   return (
  //     <svg
  //       x={cx - 10}
  //       y={cy - 10}
  //       width={20}
  //       height={20}
  //       opacity={opacity}
  //       viewBox="0 0 20 20">
  //       {/* Outer transparent circle */}
  //       <circle
  //         cx={10}
  //         cy={10}
  //         r={10}
  //         fill={stroke}
  //         fillOpacity={0.2}
  //       />
  //       {/* Inner solid circle */}
  //       <circle
  //         cx={10}
  //         cy={10}
  //         r={5}
  //         fill={stroke}
  //       />
  //     </svg>
  //   );
  // };
  return (
    <div
      className="h-64"
      dir="ltr">
      {/* Bar Chart */}
      {/* <ResponsiveContainer
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
            tick={{ fontSize: 12, textAnchor: 'middle' }}
            interval={0}
            height={60}
            tickLine={false}
          />
          <YAxis tickLine={false} />
          <Tooltip />
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
      </ResponsiveContainer> */}

      {/* Dropdown for Line Chart */}
      <select
        value={selectedBucket || ''}
        onChange={(e) => setSelectedBucket(e.target.value)}
        style={{ margin: '20px 0', padding: '5px' }}>
        <option value="">All</option>
        {dataBarChart.map((bucket) => (
          <option
            key={bucket.name}
            value={bucket.name}>
            {bucket.name}
          </option>
        ))}
      </select>

      {/* Line Chart */}
      <div className="w-full h-64">
        {/* <ResponsiveContainer
          width="100%"
          height="100%">
          <LineChart
            data={modifiedData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            {buckets.map((bucket, index) => (
              <Line
                dot={<CustomDot />}
                key={`cell-${index}`}
                type="monotone"
                dataKey={bucket.name}
                stroke={bucket.color}
                opacity={
                  selectedBucket === null ||
                  selectedBucket.toLowerCase().split(' ').join('') ===
                    bucket.name.toLowerCase().split(' ').join('')
                    ? 0.8
                    : 0.05
                }
                strokeWidth={2}
                activeDot={
                  selectedBucket === null ||
                  selectedBucket.toLowerCase().split(' ').join('') ===
                    bucket.name.toLowerCase().split(' ').join('')
                    ? true
                    : false
                }
              />
            ))}
          </LineChart>
        </ResponsiveContainer> */}
      </div>
    </div>
  );
};

export default ChartComponent;
