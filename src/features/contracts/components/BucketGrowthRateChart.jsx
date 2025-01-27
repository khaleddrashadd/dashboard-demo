import CustomTooltip from '@/components/CustomTooltip';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import CustomDot from './CustomDot';
import { getSelectedBuckets, getSelectedMonth } from '../store/contractSlice';
import { useSelector } from 'react-redux';
import CustomLegend from './CustomLegend';
import EmptyState from '@/components/EmptyState';
import { BUCKETS } from '@/constants/contracts';

const BucketGrowthRateChart = ({ data, isEmpty }) => {
  const selectedBuckets = useSelector(getSelectedBuckets);
  const selectedMonth = useSelector(getSelectedMonth);
  const title = selectedMonth.toString().trim()
    ? 'لا يوجد معدل تزايد بناءاً على العناصر المدخلة، يجب اختيار فترة اكثر من شهر.'
    : 'لا توجد بيانات';
  if (isEmpty) {
    return (
      <EmptyState>
        <p className="font-semibold">{title}</p>
      </EmptyState>
    );
  }
  return (
    <div className="w-full p-3">
      <div
        className="h-64"
        dir="ltr">
        <ResponsiveContainer
          width="100%"
          height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              interval={0}
              padding={{ left: 30, right: 30 }}
            />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
            {BUCKETS.map((bucket, index) => (
              <Line
                dot={<CustomDot />}
                key={`cell-${index}`}
                type="monotone"
                dataKey={bucket.name}
                stroke={bucket.color}
                hide={
                  !selectedBuckets
                    ?.map((bucket) => bucket.id)
                    ?.includes(bucket.id)
                }
                unit={selectedBuckets}
                opacity={
                  !selectedBuckets.length ||
                  selectedBuckets.map((bucket) => bucket.id).includes(bucket.id)
                    ? 0.8
                    : 0.05
                }
                strokeWidth={2}
                activeDot={
                  !selectedBuckets.length ||
                  selectedBuckets.map((bucket) => bucket.id).includes(bucket.id)
                    ? true
                    : false
                }
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BucketGrowthRateChart;
