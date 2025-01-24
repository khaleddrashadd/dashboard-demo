import { useMemo } from 'react';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import CustomTooltip from './CustomTooltip';
const COLORS = {
  unpaid: '#33AAFF', // Blue
  partialPaid: '#6FD195', // Green
  paid: '#FFAE4C', // Orange/Yellow
};

const PaymentAmountChart = ({ data }) => {
  const displayData = useMemo(() => {
    return data || [];
  }, [data]);

  const isSinglePair = displayData.length === 1;

  return (
    <div
      className="h-64"
      dir="ltr">
      <ResponsiveContainer
        width="100%"
        height="100%">
        <BarChart
          data={displayData}
          margin={{ right: 30, bottom: 12 }}>
          <XAxis
            dataKey="month"
            tick={{ fontSize: 10, angle: -45, textAnchor: 'end' }}
            interval={0}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `${value / 1000}k`}
            tickLine={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: '#00619d', opacity: 0.1 }}
          />
          <Bar
            dataKey="unpaid"
            stackId="a"
            fill={COLORS.unpaid}
            name="لم يسدد"
            opacity={0.8}
            barSize={isSinglePair ? 80 : 15}
          />
          <Bar
            dataKey="paid"
            stackId="a"
            fill={COLORS.paid}
            name="سداد كلي"
            barSize={isSinglePair ? 80 : 15}
          />
          <Bar
            dataKey="partialPaid"
            stackId="a"
            fill={COLORS.partialPaid}
            name="سداد جزئي"
            barSize={isSinglePair ? 80 : 15}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PaymentAmountChart;
