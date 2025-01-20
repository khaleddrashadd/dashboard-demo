import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const CollectionPerformanceChart = () => {
  // Mock data for the line chart
  const monthlyData = [
    { month: 'يناير', actual: 45000, target: 60000 },
    { month: 'فبراير', actual: 55000, target: 70000 },
    { month: 'مارس', actual: 58000, target: 75000 },
    { month: 'ابريل', actual: 62000, target: 80000 },
    { month: 'مايو', actual: 65000, target: 85000 },
    { month: 'يونيو', actual: 68000, target: 82000 },
    { month: 'يوليو', actual: 70000, target: 80000 },
    { month: 'اغسطس', actual: 67000, target: 78000 },
    { month: 'سبتمبر', actual: 65000, target: 75000 },
    { month: 'اكتوبر', actual: 63000, target: 73000 },
    { month: 'نوفمبر', actual: 58000, target: 68000 },
    { month: 'ديسمبر', actual: 55000, target: 65000 },
  ];

  return (
    <div className="h-64">
      <ResponsiveContainer
        width="100%"
        height="100%">
        <AreaChart data={monthlyData}>
          <defs>
            <linearGradient
              id="colorActual"
              x1="0"
              y1="0"
              x2="0"
              y2="1">
              <stop
                offset="5%"
                stopColor="#0095FF"
                stopOpacity={0.2}
              />
              <stop
                offset="95%"
                stopColor="#0095FF"
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient
              id="colorTarget"
              x1="0"
              y1="0"
              x2="0"
              y2="1">
              <stop
                offset="5%"
                stopColor="#6FD195"
                stopOpacity={0.2}
              />
              <stop
                offset="95%"
                stopColor="#6FD195"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend iconSize={32} />
          <Area
            type="monotone"
            dataKey="actual"
            name="الآداء الفعلي"
            stroke="#0095FF"
            fillOpacity={1}
            fill="url(#colorActual)"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Area
            type="monotone"
            dataKey="target"
            name="الآداء المتوقع"
            stroke="#6FD195"
            fillOpacity={1}
            fill="url(#colorTarget)"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CollectionPerformanceChart;
