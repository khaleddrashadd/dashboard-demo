import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const MultiSelect = ({
  options,
  onChange,
  variant,
  className,
  labelKey,
  defaultValue,
  selectAllLabel = 'All selected',
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    setSelectedOptions(defaultValue || []);
  }, [defaultValue]);
  const toggleOption = (value) => {
    const updatedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter((item) => item !== value)
      : [...selectedOptions, value];
    // setSelectedOptions(updatedOptions);
    onChange?.(updatedOptions); // Notify parent if onChange is passed
  };

  const toggleOptionAll = (values) => {
    // setSelectedOptions(values);
    onChange?.(values); // Notify parent if onChange is passed
  };

  const renderLabel = () => {
    if (!selectedOptions.length) {
      return 'Select Option';
    }
    if (selectedOptions.length === options.length) {
      return selectAllLabel;
    }
    return labelKey
      ? selectedOptions.map((option) => option[labelKey]).join(', ')
      : selectedOptions.join(', ');
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          className={cn(
            'focus-visible:ring-0 focus-visible:ring-transparent',
            className
          )}>
          <div className="flex items-center  w-full justify-between gap-2">
            <span className="text-ellipsis overflow-hidden">
              {renderLabel()}
            </span>
            <ChevronDown />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          className="focus:bg-primary-50"
          checked={selectedOptions.length === options.length}
          onCheckedChange={() =>
            toggleOptionAll(
              selectedOptions.length === options.length ? [] : options
            )
          }>
          {selectAllLabel}
        </DropdownMenuCheckboxItem>
        {options.map((option, i) => (
          <DropdownMenuCheckboxItem
            className="focus:bg-primary-50"
            key={i}
            checked={selectedOptions.some((item) => item.id === option.id)}
            onCheckedChange={() => toggleOption(option)}>
            {labelKey ? option[labelKey] : option}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default MultiSelect;
