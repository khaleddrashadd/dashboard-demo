import { useState, useMemo } from 'react';
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
import CustomTooltip from './CustomTooltip';

const CollectionPerformanceChart = () => {
  const years = [
    { value: 'all', label: 'الكل' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
  ];

  const months = [
    { value: 'all', label: 'الكل' },
    { value: '1', label: 'يناير' },
    { value: '2', label: 'فبراير' },
    { value: '3', label: 'مارس' },
    { value: '4', label: 'أبريل' },
    { value: '5', label: 'مايو' },
    { value: '6', label: 'يونيو' },
    { value: '7', label: 'يوليو' },
    { value: '8', label: 'أغسطس' },
    { value: '9', label: 'سبتمبر' },
    { value: '10', label: 'أكتوبر' },
    { value: '11', label: 'نوفمبر' },
    { value: '12', label: 'ديسمبر' },
  ];

  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('all');

  // Sample data structure
  const sampleData = {
    all: [{ name: '', actual: 20.854, target: 38.854 }],
    2024: {
      overview: [
        { name: 'يناير', actual: 15.2, target: 30.5 },
        { name: 'فبراير', actual: 18.4, target: 32.1 },
        { name: 'مارس', actual: 20.854, target: 38.854 },
        { name: 'أبريل', actual: 22.3, target: 35.7 },
        { name: 'مايو', actual: 19.8, target: 33.2 },
        { name: 'يونيو', actual: 21.5, target: 36.8 },
        { name: 'يوليو', actual: 23.1, target: 37.4 },
        { name: 'أغسطس', actual: 20.7, target: 34.9 },
        { name: 'سبتمبر', actual: 24.2, target: 38.6 },
        { name: 'أكتوبر', actual: 22.8, target: 36.3 },
        { name: 'نوفمبر', actual: 21.4, target: 35.8 },
        { name: 'ديسمبر', actual: 23.6, target: 37.9 },
      ],
      1: [{ name: 'يناير', actual: 15.2, target: 30.5 }],
      2: [{ name: 'فبراير', actual: 18.4, target: 32.1 }],
      // ... other months
    },
  };

  // Handle year change
  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedMonth('all'); // Reset month selection when year changes
  };

  // Get display data based on selections
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
    <div className="w-full p-3">
      <div className="mb-4 flex justify-end gap-4">
        {selectedYear !== 'all' && (
          <select
            className="border rounded p-2 text-right"
            onChange={(e) => setSelectedMonth(e.target.value)}
            value={selectedMonth}>
            {months.map((month) => (
              <option
                key={month.value}
                value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
        )}

        <select
          className="border rounded p-2 text-right"
          onChange={(e) => handleYearChange(e.target.value)}
          value={selectedYear}>
          {years.map((year) => (
            <option
              key={year.value}
              value={year.value}>
              {year.label}
            </option>
          ))}
        </select>
      </div>

      <div
        className="h-44"
        dir="ltr">
        <ResponsiveContainer
          width="100%"
          height="100%">
          <BarChart
            data={displayData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
