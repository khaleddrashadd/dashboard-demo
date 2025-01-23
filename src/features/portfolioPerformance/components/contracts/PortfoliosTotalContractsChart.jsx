import { useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import CustomTooltip from './CustomTooltip';

const data3 = [
  { name: 'SNB', value: 200 },
  { name: 'NBE', value: 65 },
  { name: 'EGP', value: 45 },
  { name: 'SFA', value: 58 },
];

const PortfoliosTotalContractsChart = () => {
  const [selectedBar, setSelectedBar] = useState(null);

  const handleClick = (entry) => {
    setSelectedBar((prev) => (prev ? null : entry.name));
  };
  return (
    <div
      className="h-64"
      dir="ltr">
      <ResponsiveContainer
        width="100%"
        height="100%"
        minHeight={240}>
        <BarChart
          data={data3}
          layout="vertical"
          margin={{ right: 30, bottom: 20 }}>
          <CartesianGrid
            horizontal={false}
            strokeDasharray="3,3"
          />
          <XAxis
            type="number"
            domain={[0, 100]}
            tickLine={false}
            orientation="top"
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 12 }}
            tickLine={false}
          />
          <Bar
            dataKey="value"
            fill="#00609D"
            onClick={handleClick}>
            {data3.map((entry) => (
              <Cell
                key={entry.name}
                fill="#00609D"
                opacity={selectedBar && selectedBar !== entry.name ? 0.3 : 0.8}
                cursor="pointer"
              />
            ))}
          </Bar>
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: '#00619d', opacity: 0.1 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PortfoliosTotalContractsChart;
