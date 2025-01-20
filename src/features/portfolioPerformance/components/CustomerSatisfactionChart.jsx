import { useRef, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { useOnClickOutside } from 'usehooks-ts';

const CustomerSatisfactionChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const chartRef = useRef(null);

  useOnClickOutside(chartRef, () => setActiveIndex(null));

  // Mock data for the satisfaction pie chart
  const satisfactionData = [
    { name: 'Satisfied', value: 27, color: '#6FD195' },
    { name: 'Neutral', value: 60, color: '#0095FF' },
    { name: 'Unsatisfied', value: 13, color: '#FFAE4C' },
  ];

  const handleSelectSegment = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
              onClick={(_, index) => handleSelectSegment(index)}
              data={satisfactionData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={130}
              paddingAngle={0}
              dataKey="value">
              {satisfactionData.map((entry, index) => (
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
                    cursor: 'pointer',
                  }}
                />
              ))}
            </Pie>
            {/* percentages */}
            {satisfactionData.map((entry, index) => {
              const rad = Math.PI / 180;
              const startAngle = index * (580 / satisfactionData.length) * rad;
              const x = Math.cos(startAngle) * 200 + 230;
              const y = Math.sin(startAngle) * 200 + 150;

              return (
                <g key={`label-${index}`}>
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-sm"
                    style={{
                      fill: entry.color,
                      opacity:
                        activeIndex === null || activeIndex === index ? 1 : 0.3,
                      transition: 'opacity 0.3s ease',
                    }}>
                    {`${entry.value}%`}
                  </text>
                </g>
              );
            })}
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* legends */}
      <div className="flex justify-center gap-4 mt-4">
        {satisfactionData.map((entry, index) => (
          <div
            key={`legend-${index}`}
            className="flex items-center cursor-pointer"
            onClick={() => handleSelectSegment(index)}>
            <div
              className="w-3 h-3 rounded-full mr-2 transition-opacity duration-300"
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

export default CustomerSatisfactionChart;
