import { useState, useRef } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { useOnClickOutside } from 'usehooks-ts';

const DelayRateChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const paymentStatusData = [
    { name: 'سداد متأخر', value: 73, color: '#1E88E5' },
    { name: 'سداد في الموعد', value: 27, color: '#4CAF50' },
  ];
  const chartRef = useRef(null);

  useOnClickOutside(chartRef, () => setActiveIndex(null));

  const handleChooseSegment = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const CustomLabel = ({ entry, index, opacity }) => {
    const rad = Math.PI / 180;
    const startAngle = index * (580 / paymentStatusData.length) * rad;
    const x = Math.cos(startAngle) * 160 + 230;
    const y = Math.sin(startAngle) * 160 + 150;

    return (
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm"
        style={{
          fill: entry.color,
          opacity: opacity,
          transition: 'opacity 0.3s ease',
        }}>
        {`${entry.value}%`}
      </text>
    );
  };

  return (
    <div
      className="w-full max-w-md"
      ref={chartRef}>
      <div className="h-80">
        <ResponsiveContainer
          width="100%"
          height="100%">
          <PieChart>
            <Pie
              onClick={(_, index) => handleChooseSegment(index)}
              data={paymentStatusData}
              cx="50%"
              cy="50%"
              outerRadius={120}
              dataKey="value">
              {paymentStatusData.map((entry, index) => (
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
            {paymentStatusData.map((entry, index) => (
              <CustomLabel
                key={`label-${index}`}
                entry={entry}
                index={index}
                opacity={
                  activeIndex === null || activeIndex === index ? 1 : 0.3
                }
              />
            ))}
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center gap-4 justify-center">
        {paymentStatusData.map((entry, index) => (
          <div
            key={`legend-${index}`}
            className="flex items-center flex-row-reverse cursor-pointer"
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

export default DelayRateChart;
