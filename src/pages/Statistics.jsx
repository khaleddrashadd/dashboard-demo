import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Card from '@/features/statistics/components/Card';
import CardSkeleton from '@/features/statistics/components/CardSkeleton';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { initialCardsData } from '@/constants/statistics';
import { Loader2 } from 'lucide-react';
import {
  getStatsService,
  getLegalOwnersService,
} from '@/features/statistics/services/services';
import ErrorFallback from '@/features/contracts/components/ErrorFallback';

const Statistics = () => {
  const [legalOwnerId, setLegalOwnerId] = useState(null);

  const getLegalOwners = async () => {
    const response = await getLegalOwnersService();
    const apiData = response.data.data;

    return apiData;
  };

  const getStatsData = async () => {
    const response = await getStatsService(legalOwnerId);
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

  const { data: statsData, isLoading: statsLoading } = useQuery({
    queryKey: ['contracts-statistics', legalOwnerId], // Include legalOwnerId in queryKey
    queryFn: () => getStatsData(legalOwnerId), // Pass legalOwnerId to getData
    placeholderData: keepPreviousData,
  });

  const { data: legalOwnerData, isLoading: legalOwnerLoading } = useQuery({
    queryKey: ['legal-owners'], // Include legalOwnerId in queryKey
    queryFn: () => getLegalOwners(), // Pass legalOwnerId to getData
    placeholderData: keepPreviousData,
  });

  console.log(legalOwnerData);
  console.log(statsData);

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
              {legalOwnerLoading ? ( // Show spinner if data is loading
                <div className="flex justify-center items-center p-2">
                  <Loader2 className="h-4 w-4 animate-spin" /> {/* Spinner */}
                </div>
              ) : (
                <>
                  <SelectItem value={null} key="select-all">
                    الكل
                  </SelectItem>
                  {legalOwnerData?.length > 0
                    ? legalOwnerData.map((item) => (
                        <SelectItem
                          value={item.portfolioId}
                          key={item.portfolioId}
                        >
                          {item.legalOwner}
                        </SelectItem>
                      ))
                    : null}
                </>
              )}
            </SelectContent>
          </Select>
        </div>
      </div>
      {/*  */}
      <ErrorFallback>
        <div className="grid md:grid-cols-[repeat(2,1fr)] grid-cols-1 gap-4">
          {!statsLoading ? <Card cardsData={statsData} /> : <CardSkeleton />}
        </div>
      </ErrorFallback>
    </div>
  );
};

export default Statistics;
