import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import CustomPieTooltip from './CustomPieTooltip';
import CustomLabel from './CustomLabel';

const ContractStatusChart = () => {
  const paymentStatusData = [
    { name: 'نشط', value: 73, color: '#0095FF' },
    { name: 'مغلق', value: 27, color: '#6FD195' },
  ];

  return (
    <div className="w-full ">
      <div className="h-80">
        <ResponsiveContainer
          width="100%"
          height="100%">
          <PieChart>
            <Pie
              data={paymentStatusData}
              cx="50%"
              cy="50%"
              outerRadius={120}
              labelLine={false}
              label={<CustomLabel />}
              dataKey="value">
              {paymentStatusData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  style={{
                    transformOrigin: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomPieTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center gap-4 justify-center mb-3">
        {paymentStatusData.map((entry, index) => (
          <div
            key={`legend-${index}`}
            className="flex items-center cursor-pointer">
            <div
              className="w-3 h-3 rounded-full ml-2 transition-opacity duration-300"
              style={{
                backgroundColor: entry.color,
              }}
            />
            <span className="text-sm transition-opacity duration-300">
              {entry.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContractStatusChart;
