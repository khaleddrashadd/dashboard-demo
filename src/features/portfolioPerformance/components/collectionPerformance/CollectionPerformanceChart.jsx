import CustomTooltip from '@/components/CustomTooltip';
import { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
const CollectionPerformanceChart = ({ data }) => {
  const displayData = useMemo(() => {
    return data || [];
  }, [data]);

  const isSinglePair = displayData.length === 1;

  return (
    <div className="w-full p-3">
      <div
        className="h-64"
        dir="ltr">
        <ResponsiveContainer
          width="100%"
          height="100%">
          <BarChart
            data={displayData}
            margin={{ top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              domain={[0, 40]}
              tickLine={false}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: '#00619d', opacity: 0.1 }}
            />
            <Legend />
            <Bar
              dataKey="target"
              name="الأداء المتوقع"
              fill="#D1803F"
              style={{ opacity: 0.8 }}
              radius={[4, 4, 0, 0]}
              barSize={isSinglePair ? 80 : 15}
            />
            <Bar
              dataKey="actual"
              name="الأداء الفعلي"
              fill="#6FD195"
              style={{ opacity: 0.8 }}
              radius={[4, 4, 0, 0]}
              barSize={isSinglePair ? 80 : 15}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CollectionPerformanceChart;
