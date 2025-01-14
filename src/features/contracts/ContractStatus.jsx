import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
  Cell,
} from 'recharts';

const ContractStatus = () => {
  const data = [
    {
      name: 'Current',
      amount: 80736,
      contracts: 20,
      color: '#4DD0E1',
    },
    {
      name: 'Grace period',
      amount: 75670,
      contracts: 15,
      color: '#BDBDBD',
    },
    {
      name: 'Bucket 1',
      amount: 116854.03,
      contracts: 77,
      color: '#FFF176',
    },
    {
      name: 'Bucket 2',
      amount: 90547.03,
      contracts: 38,
      color: '#FFB74D',
    },
    {
      name: 'Bucket 3',
      amount: 116854.03,
      contracts: 17,
      color: '#ff6f00',
    },
    {
      name: 'Bucket 4',
      amount: 60448.03,
      contracts: 40,
      color: '#da4b0e',
    },
    {
      name: 'Bucket 5',
      amount: 30457.03,
      contracts: 20,
      color: '#ff4a13',
    },
    {
      name: 'Bucket 6',
      amount: 80554.03,
      contracts: 7,
      color: '#ef3f09',
    },
    {
      name: 'Write off',
      amount: 11544.03,
      contracts: 5,
      color: '#ea2a0c',
    },
    {
      name: 'Closed',
      amount: 116854.03,
      contracts: 38,
      color: '#757575',
    },
  ];
  const formatYAxis = (value) => {
    return `${value}K`;
  };
  const CustomLabel = ({ x, y, width, value, index }) => {
    return (
      <g>
        <text
          x={x + width / 2}
          y={y - 24}
          textAnchor="middle"
          fill="#000"
          className="text-base font-bold">
          {data[index].contracts}
        </text>
        <text
          x={x + width / 2}
          y={y - 8}
          textAnchor="middle"
          fill="#666"
          className="text-xs">
          {typeof value === 'number'
            ? value.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }) + 'K'
            : value}
        </text>
      </g>
    );
  };

  return (
    <div
      className="w-full h-96 p-4 bg-white rounded-lg shadow"
      dir="ltr">
      <ResponsiveContainer
        width="100%"
        height="100%">
        <BarChart
          data={data}
          margin={{
            top: 40,
            right: 30,
            left: 0,
            bottom: 20,
          }}
          barSize={50}>
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#666', fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#666', fontSize: 12 }}
            tickFormatter={formatYAxis}
            domain={[0, 140000]}
            ticks={[0, 20000, 40000, 60000, 80000, 100000, 120000, 140000]}
          />
          <Bar
            dataKey="amount"
            radius={[4, 4, 0, 0]}>
            <LabelList
              content={<CustomLabel />}
              dataKey="contracts"
              position="top"
              data={data}
            />

            {data.map((entry, index) => (
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

export default ContractStatus;
