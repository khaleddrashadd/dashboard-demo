import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const ContractGrowthRate = () => {
  const [level, setLevel] = useState('year');
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  // Sample data structure
  const yearData = [
    { name: '2024', value: 57 },
    { name: '2023', value: 32 },
    { name: '2022', value: 40 },
    { name: '2021', value: 17 },
    { name: '2020', value: 22 },
    { name: '2019', value: 99 },
    { name: '2018', value: 22 },
    { name: '2017', value: 8 },
    { name: '2016', value: 7 },
    { name: '2015', value: 42 },
    { name: '2014', value: 22 },
    { name: '2013', value: 6 },
    { name: '2012', value: 3 },
    { name: '2011', value: 1 },
    { name: '2010', value: 6 },
  ];

  const monthData = {
    2024: [
      { name: 'Jan', value: 78 },
      { name: 'Feb', value: 69 },
      { name: 'Mar', value: 45 },
      { name: 'Apr', value: 32 },
      { name: 'May', value: 17 },
      { name: 'Jun', value: 22 },
      { name: 'Jul', value: 33 },
      { name: 'Aug', value: 44 },
      { name: 'Sep', value: 55 },
      { name: 'Oct', value: 66 },
      { name: 'Nov', value: 77 },
      { name: 'Dec', value: 88 },
    ],
  };

  const dayRangeData = {
    Jan: [
      { name: '0-10', value: 57 },
      { name: '11-20', value: 32 },
      { name: '21-30', value: 40 },
    ],
    Feb: [
      { name: '0-10', value: 78 },
      { name: '11-20', value: 69 },
      { name: '21-30', value: 45 },
    ],
    Mar: [
      { name: '0-10', value: 45 },
      { name: '11-20', value: 32 },
      { name: '21-30', value: 17 },
    ],
    Apr: [
      { name: '0-10', value: 32 },
      { name: '11-20', value: 17 },
      { name: '21-30', value: 22 },
    ],
    May: [
      { name: '0-10', value: 17 },
      { name: '11-20', value: 22 },
      { name: '21-30', value: 33 },
    ],
    Jun: [
      { name: '0-10', value: 22 },
      { name: '11-20', value: 33 },
      { name: '21-30', value: 44 },
    ],
    Jul: [
      { name: '0-10', value: 33 },
      { name: '11-20', value: 44 },
      { name: '21-30', value: 55 },
    ],
    Aug: [
      { name: '0-10', value: 44 },
      { name: '11-20', value: 55 },
      { name: '21-30', value: 66 },
    ],
    Sep: [
      { name: '0-10', value: 55 },
      { name: '11-20', value: 66 },
      { name: '21-30', value: 77 },
    ],
    Oct: [
      { name: '0-10', value: 66 },
      { name: '11-20', value: 77 },
      { name: '21-30', value: 88 },
    ],
    Nov: [
      { name: '0-10', value: 77 },
      { name: '11-20', value: 88 },
      { name: '21-30', value: 57 },
    ],
    Dec: [
      { name: '0-10', value: 88 },
      { name: '11-20', value: 57 },
      { name: '21-30', value: 32 },
    ],
  };

  const handleClick = (data) => {
    if (level === 'year') {
      setSelectedYear(data.name);
      setLevel('month');
    } else if (level === 'month') {
      setSelectedMonth(data.name);
      setLevel('day');
    }
  };

  const handleBackClick = () => {
    if (level === 'day') {
      setLevel('month');
      setSelectedMonth(null);
    } else if (level === 'month') {
      setLevel('year');
      setSelectedYear(null);
    }
  };

  const getCurrentData = () => {
    if (level === 'year') return yearData;
    if (level === 'month' && selectedYear) return monthData[selectedYear] || [];
    if (level === 'day' && selectedMonth)
      return dayRangeData[selectedMonth] || [];
    return [];
  };

  const getChartTitle = () => {
    if (level === 'year') return 'Yearly Data';
    if (level === 'month') return `Monthly Data for ${selectedYear}`;
    return `Daily Ranges for ${selectedMonth} ${selectedYear}`;
  };

  return (
    <div
      className="w-fullp-4"
      dir="ltr">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{getChartTitle()}</h2>
        {level !== 'year' && (
          <button
            onClick={handleBackClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Back
          </button>
        )}
      </div>
      <div className="h-96">
        <ResponsiveContainer
          width="100%"
          height="100%">
          <BarChart
            data={getCurrentData()}
            layout="vertical"
            onClick={(e) =>
              e?.activePayload?.[0] && handleClick(e.activePayload[0].payload)
            }>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              domain={[0, 100]}
            />
            <YAxis
              dataKey="name"
              type="category"
              interval={0}
            />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#8884d8"
              cursor="pointer"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ContractGrowthRate;
