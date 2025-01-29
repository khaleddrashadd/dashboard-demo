import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import InputWrapper from '@/components/InputWrapper';
import { RotateCcw } from 'lucide-react';
import InstallmentsTable from '@/features/installments/Table';

import { default as Card } from '@/features/installments/Card';
import CardSkeleton from '@/features/installments/CardSkeleton';

const Installments = () => {
  const initialState = {
    portfolio: '',
    year: '',
    month: '',
    sadadNumber: '',
    beneficiaryName: '',
    contractNumber: '',
  };

  const [formState, setFormState] = useState({
    ...initialState,
  });

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
    console.log('Updated State:', { ...formState, [field]: value }); // Log the updated state
  };

  const cardsData = [
    {
      title: '5701',
      content: 'SR 535335',
      icon: 'الفواتير',
      variant: 'primary-500',
    },
    {
      title: '5701',
      content: 'SR 535335',
      icon: 'الفواتير',
      variant: 'secondary-400',
    },
    {
      title: '5701',
      content: 'SR 535335',
      icon: 'الفواتير',
      variant: 'danger-200',
    },
    {
      title: '5701',
      content: 'SR 535335',
      icon: 'الفواتير',
      variant: 'extended-700',
    },
  ];

  const portfolios = [
    {
      id: 1,
      name: 'Portfolio',
    },
    {
      id: 2,
      name: 'Portfolio',
    },
    {
      id: 3,
      name: 'Portfolio',
    },
    {
      id: 4,
      name: 'Portfolio',
    },
  ];

  const months = [
    { id: 1, name: 'January' },
    { id: 2, name: 'February' },
    { id: 3, name: 'March' },
    { id: 4, name: 'April' },
    { id: 5, name: 'May' },
    { id: 6, name: 'June' },
    { id: 7, name: 'July' },
    { id: 8, name: 'August' },
    { id: 9, name: 'September' },
    { id: 10, name: 'October' },
    { id: 11, name: 'November' },
    { id: 12, name: 'December' },
  ];

  const years = Array.from({ length: 16 }, (_, i) => ({
    id: i + 2010,
    name: (i + 2010).toString(),
  }));

  // Handle reset
  const handleReset = () => {
    setFormState(initialState);
    console.log('State Reset:', initialState);
  };

  return (
    <div className="px-2 sm:px-6 mt-4 z-20">
      {/*  */}
      <div className="flex flex-col gap-4 items-start mb-4">
        <h2 className=" font-bold text-2xl">الدفعات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
          {/*  */}
          <div className="grid grid-cols-2 gap-2 md:gap-4 grid-rows-[repeat(2,max-content)] row-start-2 md:row-start-1">
            <div className="flex flex-col gap-4">
              <InputWrapper title={'المحفظة'}>
                <Select
                  onValueChange={(id) => {
                    handleInputChange('portfolio', id);
                  }}
                  value={formState.portfolio}
                >
                  <SelectTrigger
                    className="w-full h-12 bg-white border border-solid border-ivory-300 ring-offset-transparent ring-0"
                    dir="rtl"
                  >
                    <SelectValue placeholder="المحفظة" />
                  </SelectTrigger>
                  <SelectContent>
                    {portfolios.map((item) => (
                      <SelectItem value={item.id} key={item.id}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </InputWrapper>

              <InputWrapper title={'السنة'}>
                <Select
                  onValueChange={(year) => {
                    handleInputChange('year', year);
                  }}
                  value={formState.year}
                >
                  <SelectTrigger
                    className="w-full h-12 bg-white border border-solid border-ivory-300 ring-offset-transparent ring-0"
                    dir="rtl"
                  >
                    <SelectValue placeholder="السنة" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((item) => (
                      <SelectItem value={item.id} key={item.id}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </InputWrapper>

              <InputWrapper title={'الشهر'}>
                <Select
                  onValueChange={(month) => {
                    handleInputChange('month', month);
                  }}
                  value={formState.month}
                >
                  <SelectTrigger
                    className="w-full h-12 bg-white border border-solid border-ivory-300 ring-offset-transparent ring-0"
                    dir="rtl"
                  >
                    <SelectValue placeholder="الشهر" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((item) => (
                      <SelectItem value={item.id} key={item.id}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </InputWrapper>
            </div>
            <div className="flex flex-col gap-4">
              <InputWrapper title={'رقم سداد'}>
                <Input
                  type="text"
                  id="sadad-number"
                  placeholder="رقم سداد"
                  className="w-full h-12 border border-solid border-ivory-300"
                  onChange={(e) => {
                    handleInputChange('sadadNumber', e.target.value);
                  }}
                  value={formState.sadadNumber}
                />
              </InputWrapper>

              <InputWrapper title={'اسم المستفيد'}>
                <Input
                  type="text"
                  id="beneficiary-name"
                  placeholder="اسم المستفيد"
                  className="w-full h-12 border border-solid border-ivory-300"
                  onChange={(e) => {
                    handleInputChange('beneficiaryName', e.target.value);
                  }}
                  value={formState.beneficiaryName}
                />
              </InputWrapper>
              <InputWrapper title={'رقم العقد'}>
                <Input
                  type="text"
                  id="contract-number"
                  placeholder="رقم العقد"
                  className="w-full h-12 border border-solid border-ivory-300"
                  onChange={(e) => {
                    handleInputChange('contractNumber', e.target.value);
                  }}
                  value={formState.contractNumber}
                />
              </InputWrapper>
            </div>
            <Button
              className="flex items-center gap-2 w-max py-4 px-9 bg-white text-md font-semibold border-2 
            border-solid border-primary-500 rounded-md text-primary-500 hover:bg-white shadow-sm"
              onClick={handleReset}
            >
              <RotateCcw className="stroke-primary-500 w-5 h-5" />
              إعادة تعيين
            </Button>
          </div>
          {/*  */}
          <div className="grid grid-rows-[max-content,1fr] grid-cols-2  shadow-custom px-4 pt-3 border border-ivory-200 rounded-lg">
            <h3 className="text-semibold text-lg border-b border-b-solid border-[#D8D8D8] pb-3 col-start-1 col-span-full">
              إحصائيات الفواتير
            </h3>
            <div className="grid md:grid-cols-[repeat(2,1fr)] grid-cols-1 gap-4 col-start-1 col-span-full py-3">
              {cardsData.length > 0 ? (
                cardsData.map((card, index) => <Card key={index} card={card} />)
              ) : (
                <CardSkeleton />
              )}
            </div>
          </div>
          {/*  */}
          <div className="col-start-1 col-span-full flex flex-col gap-3 p-4 bg-white border border-ivory-200 rounded-lg shadow-custom">
            <div className="flex gap-4 items-center">
              <div className="text-ivory-950 font-semibold text-xl">
                تقرير الدفعات
              </div>
              <span className="bg-primary-50 text-primary-500 text-lg font-semibold rounded-3xl px-3 py-1">
                200 دفعة
              </span>
            </div>
            <InstallmentsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installments;
