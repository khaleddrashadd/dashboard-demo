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

const PaymentAmountChart = () => {
  const sampleData = {
    all: [{ name: '', unpaid: 200.854, partialPaid: 388.854, paid: 388.854 }],
    2024: {
      overview: [
        { month: 'يناير', unpaid: 20000, partialPaid: 30000, paid: 25000 },
        { month: 'فبراير', unpaid: 15000, partialPaid: 20000, paid: 40000 },
        { month: 'مارس', unpaid: 30000, partialPaid: 15000, paid: 20000 },
        { month: 'أبريل', unpaid: 25000, partialPaid: 25000, paid: 30000 },
        { month: 'مايو', unpaid: 20000, partialPaid: 20000, paid: 25000 },
        { month: 'يونيو', unpaid: 15000, partialPaid: 30000, paid: 20000 },
        { month: 'يوليو', unpaid: 25000, partialPaid: 20000, paid: 15000 },
        { month: 'أغسطس', unpaid: 30000, partialPaid: 25000, paid: 35000 },
        { month: 'سبتمبر', unpaid: 20000, partialPaid: 35000, paid: 25000 },
        { month: 'أكتوبر', unpaid: 35000, partialPaid: 20000, paid: 30000 },
        { month: 'نوفمبر', unpaid: 25000, partialPaid: 30000, paid: 40000 },
        { month: 'ديسمبر', unpaid: 30000, partialPaid: 25000, paid: 35000 },
      ],
      1: [{ month: 'يناير', unpaid: 300, partialPaid: 120, paid: 140.2 }],
      2: [{ month: 'فبراير', unpaid: 180, partialPaid: 178.2, paid: 132.2 }],
      // 1: [{ name: 'يناير', actual: 15.2, target: 30.5 }],
      // 2: [{ name: 'فبراير', actual: 18.4, target: 32.1 }],
      // ... other months
    },
  };
  const selectedYear = '2024';
  const selectedMonth = 'all';
  const displayData = useMemo(() => {
    if (selectedYear === 'all') {
      return sampleData.all;
    }

    if (selectedMonth === 'all') {
      return sampleData[selectedYear]?.overview || [];
    }

    return sampleData[selectedYear]?.[selectedMonth] || [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYear, selectedMonth]);

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
