import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RefreshCcw } from 'lucide-react';
import { useState } from 'react';

const ContractsReportTableFilter = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');

  const handleReset = () => {
    setInputValue1('');
    setInputValue2('');
    setInputValue3('');
  };
  return (
    <div className="">
      <div className="flex flex-wrap md:grid md:grid-cols-3 xl:grid-cols-5 gap-4">
        <div className="flex flex-col gap-3 w-full">
          <Label
            className="text-sm"
            htmlFor="nid">
            رقم الهوية
          </Label>
          <Input
            id="nid"
            className="font-normal text-sm focus-visible:ring-1 focus-visible:ring-primary-500 focus-visible:ring-offset-0"
            placeholder="ادخل رقم الهوية"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <Label
            className="text-sm"
            htmlFor="name">
            اسم المستفيد
          </Label>
          <Input
            id="name"
            placeholder="ادخل اسم المستفيد"
            className="font-normal text-sm focus-visible:ring-1 focus-visible:ring-primary-500 focus-visible:ring-offset-0"
            value={inputValue2}
            onChange={(e) => setInputValue3(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <Label
            className="text-sm"
            htmlFor="contractId">
            رقم العقد
          </Label>
          <Input
            id="contractId"
            placeholder="ادخل رقم العقد"
            className="font-normal text-sm focus-visible:ring-1 focus-visible:ring-primary-500 focus-visible:ring-offset-0"
            value={inputValue3}
            onChange={(e) => setInputValue3(e.target.value)}
          />
        </div>
        <div className="flex justify-end items-end col-span-3 xl:col-span-2">
          <Button
            variant="outline"
            className="border-primary border-[1.5px] hover:bg-primary-50/40"
            onClick={handleReset}>
            <div className="flex items-center gap-2 text-primary">
              <RefreshCcw />
              <span>إعادة تعيين</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContractsReportTableFilter;
