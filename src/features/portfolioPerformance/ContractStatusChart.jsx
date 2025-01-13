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
  { name: 'Current', value: 20000, color: '#4CAF50' },
  { name: 'Grace period', value: 35000, color: '#9E9E9E' },
  { name: 'Bucket 1', value: 50000, color: '#FFD54F' },
  { name: 'Bucket 2', value: 35000, color: '#FFA726' },
  { name: 'Bucket 3', value: 45000, color: '#FF7043' },
  { name: 'Bucket 4', value: 40000, color: '#FF5252' },
  { name: 'Bucket 5', value: 70000, color: '#E57373' },
  { name: 'Bucket 6', value: 35000, color: '#EF5350' },
  { name: 'Write off', value: 25000, color: '#F44336' },
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
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ContractStatusChart;
