import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import CustomLabel from './CustomLabel';
import { useMemo } from 'react';
import CustomPieTooltip from '@/components/CustomPieTooltip';

const COLORS = {
  1: '#0095FF',
  2: '#6FD195',
};

const ContractStatusChart = ({ data }) => {
  const modifiedData = useMemo(() => {
    return data?.map((item, idx) => {
      return {
        ...item,
        color: COLORS[idx + 1],
      };
    });
  }, [data]);
  return (
    <div className="w-full ">
      <div className="h-80">
        <ResponsiveContainer
          width="100%"
          height="100%">
          <PieChart>
            <Pie
              data={modifiedData}
              cx="50%"
              cy="50%"
              outerRadius={120}
              labelLine={false}
              label={<CustomLabel />}
              dataKey="value">
              {modifiedData?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[entry.id]}
                  style={{
                    transformOrigin: 'center',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomPieTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center gap-4 justify-center mb-3">
        {modifiedData?.map((entry, index) => (
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
