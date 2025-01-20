import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'; // Mock data for the bar chart
const bucketData = [
  { name: 'Current', value: 20000, color: '#33BAA5' },
  { name: 'Grace period', value: 35000, color: '#B1B1B1' },
  { name: 'Bucket 1', value: 50000, color: '#F6E764' },
  { name: 'Bucket 2', value: 35000, color: '#FFCB59' },
  { name: 'Bucket 3', value: 45000, color: '#FFBE70' },
  { name: 'Bucket 4', value: 40000, color: '#F08747' },
  { name: 'Bucket 5', value: 70000, color: '#F66143' },
  { name: 'Bucket 6', value: 35000, color: '#F36363 ' },
  { name: 'Write off', value: 25000, color: '#DA0000' },
  { name: 'Closed', value: 25000, color: '#6B6B6B' },
];

const ContractStatusChart = () => {
  return (
    <div className="h-64">
      <ResponsiveContainer
        width="100%"
        height="100%">
        <BarChart data={bucketData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value">
            {bucketData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                style={{ opacity: 0.8 }}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ContractStatusChart;
