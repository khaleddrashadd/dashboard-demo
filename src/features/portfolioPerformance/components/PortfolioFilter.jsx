import { Select } from '@/components/ui/select';
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSelectedMonth,
  getSelectedYear,
  selectMonth,
  selectYear,
} from '../store/filterSlice';

const YEARS = [
  { value: ' ', label: 'الكل' },
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' },
  { value: '2022', label: '2022' },
  { value: '2021', label: '2021' },
];

const MONTHS = [
  { value: ' ', label: 'الكل' },
  { value: '1', label: 'يناير' },
  { value: '2', label: 'فبراير' },
  { value: '3', label: 'مارس' },
  { value: '4', label: 'أبريل' },
  { value: '5', label: 'مايو' },
  { value: '6', label: 'يونيو' },
  { value: '7', label: 'يوليو' },
  { value: '8', label: 'أغسطس' },
  { value: '9', label: 'سبتمبر' },
  { value: '10', label: 'أكتوبر' },
  { value: '11', label: 'نوفمبر' },
  { value: '12', label: 'ديسمبر' },
];

const PortfolioFilter = () => {
  const dispatch = useDispatch();
  const selectedYear = useSelector(getSelectedYear);
  const selectedMonth = useSelector(getSelectedMonth);

  return (
    <div className="flex items-center gap-4 flex-col md:flex-row">
      <div className="bg-primary-50 text-sm p-3 rounded-md">
        <SelectGroup className="flex flex-col gap-2">
          <SelectLabel
            htmlFor="year"
            className="p-0 text-sm font-normal">
            السنة
          </SelectLabel>
          <Select
            value={selectedYear}
            onValueChange={(value) => dispatch(selectYear(value))}>
            <SelectTrigger className="w-48 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {YEARS.map((year) => (
                <SelectItem
                  key={year.value}
                  value={year.value}>
                  {year.label}
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
            الشهر
          </SelectLabel>
          <Select
            disabled={!selectedYear.trim()}
            value={selectedMonth}
            onValueChange={(value) => dispatch(selectMonth(value))}>
            <SelectTrigger className="w-48 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {MONTHS.map((month) => (
                <SelectItem
                  key={month.value}
                  value={month.value}>
                  {month.label}
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
