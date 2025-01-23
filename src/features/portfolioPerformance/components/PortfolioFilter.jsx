import { Select } from '@/components/ui/select';
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

const YEARS = ['All', '2021', '2022', '2023', '2024', '2025'];
const MONTHS = [
  'All',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const PortfolioFilter = () => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');

  const handleYearChange = (value) => {
    setSelectedYear(value);
  };

  const handleMonthChange = (value) => {
    setSelectedMonth(value);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="bg-primary-50 text-sm p-3 rounded-md">
        <SelectGroup className="flex flex-col gap-2">
          <SelectLabel
            htmlFor="year"
            className="p-0 text-sm font-normal">
            السنة
          </SelectLabel>
          <Select
            value={selectedYear}
            onValueChange={handleYearChange}>
            <SelectTrigger className="w-48 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {YEARS.map((year) => (
                <SelectItem
                  key={year}
                  value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </SelectGroup>
      </div>
      <div className="bg-primary-50 text-sm p-3 rounded-md">
        <SelectGroup className="flex flex-col gap-2">
          <SelectLabel
            htmlFor="year"
            className="p-0 text-sm font-normal">
            السنة
          </SelectLabel>
          <Select
            value={selectedYear}
            onValueChange={handleYearChange}>
            <SelectTrigger className="w-48 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {YEARS.map((year) => (
                <SelectItem
                  key={year}
                  value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </SelectGroup>
      </div>
    </div>
  );
};

export default PortfolioFilter;
