import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Card from '@/features/statistics/Card';
import CardSkeleton from '@/features/statistics/CardSkeleton';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const Statistics = () => {
  const initialCardsData = [
    {
      activeContracts: {
        title: 'عدد العقود النشطة',
        content: null,
        icon: 'document_checked',
      },
    },
    {
      closeAccountacts: {
        title: 'عدد العقود المقفلة',
        content: null,
        icon: 'notebook',
      },
    },

    {
      totalOutstandingPrincipal: {
        title: 'قيمة المحفظة',
        content: null,
        icon: 'wallet',
      },
    },

    {
      remainingOutstandingPrincipal: {
        title: 'قيمة الأصل المتبقي',
        content: null,
        icon: 'coins',
      },
    },

    {
      totalAmountPaid: {
        title: 'المبالغ المسددة',
        content: null,
        icon: 'badge_checked',
      },
    },

    {
      delinquentAmount: {
        title: 'المبالغ المتأخرة',
        content: null,
        icon: 'alarm',
      },
    },

    {
      advanceAmount: {
        title: 'المبالغ المدفوعة مقدماً',
        content: null,
        icon: 'zap',
      },
    },

    {
      contractUpdateErrors: {
        title: 'خطأ في تحديث حالة العقود',
        content: null,
        icon: 'document_invalid',
      },
    },

    {
      activeTickets: {
        title: 'التذاكر النشطة',
        content: null,
        icon: 'badge',
      },
    },

    {
      paritiallyAmount: {
        title: 'المبلغ المدفوع جزئياً',
        content: null,
        icon: 'multi_tool',
      },
    },

    {
      paidRisk: {
        title: 'الفواتير المدفوعة',
        content: null,
        icon: 'document',
      },
    },

    {
      incommpCalls: {
        title: 'مكالمات واردة',
        content: null,
        icon: 'received_call',
      },
    },
    {
      outgoingCalls: {
        title: 'مكالمات صادرة',
        content: null,
        icon: 'sent_call',
      },
    },
  ];

  const portfolios = [
    {
      id: null,
      name: 'الكل',
    },
    {
      id: 1,
      name: 'LegalOwner1',
    },
    {
      id: 2,
      name: 'LegalOwner2',
    },
    {
      id: 3,
      name: 'LegalOwner3',
    },
    {
      id: 4,
      name: 'LegalOwner4',
    },
  ];

  const [legalOwnerId, setLegalOwnerId] = useState(null);

  const getData = async () => {
    const response = await axios.get(
      `https://simah-uat.nfsc.sa:8093/api/Statistics/get-statics-data?legalOwnerID${legalOwnerId}`
    );
    const apiData = response.data.data;

    const updatedCardsData = initialCardsData.map((card) => {
      const key = Object.keys(card)[0]; // Get the key (e.g., 'activeContracts')
      if (apiData[key]) {
        return {
          [key]: {
            ...card[key],
            content: apiData[key], // Update content with API data
          },
        };
      }
      return card; // Return unchanged card if no matching data
    });

    return updatedCardsData;
  };

  const { data, isLoading } = useQuery({
    queryKey: ['contracts-statistics', legalOwnerId], // Include legalOwnerId in queryKey
    queryFn: () => getData(legalOwnerId), // Pass legalOwnerId to getData
    placeholderData: keepPreviousData,
  });

  const handlePortfolioChange = (selectedId) => {
    console.log('Selected Portfolio ID:', selectedId);
    setLegalOwnerId(selectedId);
  };

  return (
    <div className="px-6 mt-4 z-20 ">
      {/*  */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-4">
        <h2 className=" font-bold text-2xl">الإحصائيات</h2>
        <div className=" flex flex-col gap-2 bg-primary-50 rounded-lg shadow-md p-3">
          <h3 className="title text-ivory-900 text-sm">المحفظة</h3>
          <Select onValueChange={handlePortfolioChange}>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="الكل" />
            </SelectTrigger>
            <SelectContent>
              {portfolios.map((item) => (
                <SelectItem value={item.id} key={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {/*  */}
      <div className="grid md:grid-cols-[repeat(2,1fr)] grid-cols-1 gap-4">
        {!isLoading ? <Card cardsData={data} /> : <CardSkeleton />}
      </div>
    </div>
  );
};

export default Statistics;
