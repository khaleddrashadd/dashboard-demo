import { useState, useRef } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import ChartCustomLabel from './ChartCustomLabel';
import { useOnClickOutside } from 'usehooks-ts';

const installmentsData = [
  { name: 'لم تستحق', value: 567, color: '#4CAF50' },
  { name: 'سداد جزئي', value: 843, color: '#FFA726' },
  { name: 'سداد كلي', value: 1337, color: '#1E88E5' },
];
const InstallmentNumberChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const installments = installmentsData.reduce(
    (acc, curr) => acc + curr.value,
    0
  );

  const [totalInstallments, setTotalInstallments] = useState(installments);

  const chartRef = useRef(null);

  useOnClickOutside(chartRef, () => {
    setActiveIndex(null);
    setTotalInstallments(installments);
  });

  const handleChooseSegment = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    setTotalInstallments(installmentsData[index].value);
  };

  return (
    <div
      ref={chartRef}
      className="w-full max-w-md">
      <div className="h-80 relative">
        <ResponsiveContainer
          width="100%"
          height="100%">
          <PieChart>
            <Pie
              onClick={(_, index) => handleChooseSegment(index)}
              data={installmentsData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={130}
              paddingAngle={0}
              dataKey="value">
              {installmentsData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  opacity={
                    activeIndex === null || activeIndex === index ? 1 : 0.3
                  }
                  style={{
                    transform: `scale(${activeIndex === index ? 1.05 : 1})`,
                    transformOrigin: 'center',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Pie>
            {installmentsData.map((entry, index) => (
              <ChartCustomLabel
                key={`${entry}-index`}
                entry={entry}
                index={index}
                data={installmentsData}
                opacity={
                  activeIndex === null || activeIndex === index ? 1 : 0.3
                }
              />
            ))}

            {/* Center Text */}
            <text
              x="50%"
              y="45%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xl font-bold">
              {totalInstallments}
            </text>
            <text
              x="50%"
              y="60%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-sm text-gray-600">
              كل الأقساط
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div
        className="flex justify-center gap-4 mt-4"
        dir="rtl">
        {installmentsData.map((entry, index) => (
          <div
            key={`legend-${index}`}
            className="flex items-center cursor-pointer"
            onClick={() => handleChooseSegment(index)}>
            <div
              className="w-3 h-3 rounded-full ml-2 transition-opacity duration-300"
              style={{
                backgroundColor: entry.color,
                opacity:
                  activeIndex === null || activeIndex === index ? 1 : 0.3,
              }}
            />
            <span
              className="text-sm transition-opacity duration-300"
              style={{
                color:
                  activeIndex === null || activeIndex === index
                    ? 'rgb(75, 85, 99)'
                    : 'rgb(156, 163, 175)',
              }}>
              {entry.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstallmentNumberChart;
