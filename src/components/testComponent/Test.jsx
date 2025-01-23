import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
  {
    name: 'يناير',
    'Bucket 6': 50000,
    'Bucket 5': 200,
    'Bucket 4': 800,
    'Bucket 3': 100,
    'Bucket 2': 120,
    'Bucket 1': 60,
    'Grace period': 250,
  },
  {
    name: 'فبراير',
    'Bucket 6': 65000,
    'Bucket 5': 280,
    'Bucket 4': 1200,
    'Bucket 3': 150,
    'Bucket 2': 180,
    'Bucket 1': 85,
    'Grace period': 300,
  },
  {
    name: 'مارس',
    'Bucket 6': 85000,
    'Bucket 5': 350,
    'Bucket 4': 1600,
    'Bucket 3': 200,
    'Bucket 2': 220,
    'Bucket 1': 110,
    'Grace period': 380,
  },
  {
    name: 'ابريل',
    'Bucket 6': 95000,
    'Bucket 5': 420,
    'Bucket 4': 1900,
    'Bucket 3': 250,
    'Bucket 2': 260,
    'Bucket 1': 140,
    'Grace period': 450,
  },
  {
    name: 'مايو',
    'Bucket 6': 92000,
    'Bucket 5': 380,
    'Bucket 4': 1700,
    'Bucket 3': 220,
    'Bucket 2': 230,
    'Bucket 1': 120,
    'Grace period': 400,
  },
  {
    name: 'يونيو',
    'Bucket 6': 88000,
    'Bucket 5': 340,
    'Bucket 4': 1500,
    'Bucket 3': 180,
    'Bucket 2': 200,
    'Bucket 1': 100,
    'Grace period': 350,
  },
  {
    name: 'يوليو',
    'Bucket 6': 98000,
    'Bucket 5': 450,
    'Bucket 4': 2000,
    'Bucket 3': 270,
    'Bucket 2': 280,
    'Bucket 1': 150,
    'Grace period': 480,
  },
  {
    name: 'اغسطس',
    'Bucket 6': 105000,
    'Bucket 5': 480,
    'Bucket 4': 2200,
    'Bucket 3': 300,
    'Bucket 2': 310,
    'Bucket 1': 170,
    'Grace period': 520,
  },
  {
    name: 'سبتمبر',
    'Bucket 6': 93000,
    'Bucket 5': 400,
    'Bucket 4': 1800,
    'Bucket 3': 240,
    'Bucket 2': 240,
    'Bucket 1': 130,
    'Grace period': 420,
  },
  {
    name: 'اكتوبر',
    'Bucket 6': 87000,
    'Bucket 5': 320,
    'Bucket 4': 1400,
    'Bucket 3': 160,
    'Bucket 2': 190,
    'Bucket 1': 90,
    'Grace period': 320,
  },
  {
    name: 'نوفمبر',
    'Bucket 6': 94000,
    'Bucket 5': 430,
    'Bucket 4': 1950,
    'Bucket 3': 260,
    'Bucket 2': 270,
    'Bucket 1': 145,
    'Grace period': 460,
  },
  {
    name: 'ديسمبر',
    'Bucket 6': 110000,
    'Bucket 5': 500,
    'Bucket 4': 2400,
    'Bucket 3': 320,
    'Bucket 2': 330,
    'Bucket 1': 180,
    'Grace period': 550,
  },
];

const bucketColors = {
  'Bucket 6': '#FF6B6B',
  'Bucket 5': '#FF8787',
  'Bucket 4': '#FFA07A',
  'Bucket 3': '#FFB366',
  'Bucket 2': '#FFD700',
  'Bucket 1': '#FFEB3B',
  'Grace period': '#808080',
};

const CustomDot = (props) => {
  const { cx, cy, stroke, payload, value } = props;
  console.log(stroke);

  if (!value) return null;

  return (
    <g>
      {/* Outer white circle */}
      <circle
        cx={cx}
        cy={cy}
        r={8}
        fill="#FCE7DA"
        stroke="#FCE7DA"
        strokeWidth={2}
      />
      {/* Inner colored circle */}
      <circle
        cx={cx}
        cy={cy}
        r={4}
        fill="#F39F6C"
      />
    </g>
  );
};

const Claudi = () => {
  const [selectedBuckets, setSelectedBuckets] = useState(
    Object.keys(bucketColors)
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleBucket = (bucket) => {
    if (selectedBuckets.includes(bucket)) {
      setSelectedBuckets(selectedBuckets.filter((b) => b !== bucket));
    } else {
      setSelectedBuckets([...selectedBuckets, bucket]);
    }
  };

  const selectAllBuckets = () => {
    setSelectedBuckets(Object.keys(bucketColors));
  };

  const clearAllBuckets = () => {
    setSelectedBuckets([]);
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-right">معدل تزايد ال Buckets</h2>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center px-4 py-2 bg-white border rounded-md shadow-sm">
            Filter Buckets <ChevronDown className="ml-2 h-4 w-4" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
              <div className="p-2">
                <div className="flex justify-between mb-2">
                  <button
                    onClick={selectAllBuckets}
                    className="text-sm text-blue-600 hover:text-blue-800">
                    Select All
                  </button>
                  <button
                    onClick={clearAllBuckets}
                    className="text-sm text-red-600 hover:text-red-800">
                    Clear All
                  </button>
                </div>
                {Object.entries(bucketColors).map(([bucket, color]) => (
                  <div
                    key={bucket}
                    className="flex items-center p-2 hover:bg-gray-100">
                    <input
                      type="checkbox"
                      checked={selectedBuckets.includes(bucket)}
                      onChange={() => toggleBucket(bucket)}
                      className="mr-2"
                    />
                    <span className="flex items-center">
                      <span
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: color }}
                      />
                      {bucket}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer
          width="100%"
          height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
            />
            <XAxis
              dataKey="name"
              tick={{ fill: '#666' }}
              axisLine={{ stroke: '#E5E7EB' }}
            />
            <YAxis
              tick={{ fill: '#666' }}
              axisLine={{ stroke: '#E5E7EB' }}
              tickLine={false}
            />
            <Tooltip />
            {Object.entries(bucketColors).map(([bucket, color]) => (
              <Line
                key={bucket}
                type="monotone"
                dataKey={bucket}
                stroke={color}
                strokeWidth={2}
                dot={<CustomDot />}
                activeDot={{
                  r: 6,
                  fill: color,
                  stroke: 'white',
                  strokeWidth: 2,
                }}
                opacity={selectedBuckets.includes(bucket) ? 1 : 0.2}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {Object.entries(bucketColors).map(([bucket, color]) => (
          <button
            key={bucket}
            onClick={() => toggleBucket(bucket)}
            className={`flex items-center px-3 py-1 rounded-full text-sm ${
              selectedBuckets.includes(bucket)
                ? 'border-2 border-gray-400'
                : 'border border-gray-200 opacity-50'
            }`}>
            <span
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: color }}
            />
            {bucket}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Claudi;
