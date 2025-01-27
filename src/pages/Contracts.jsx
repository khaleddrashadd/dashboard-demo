import AppHeading from '@/components/AppHeading';
import ContractsStatuses from '@/features/contracts/components/ContractsStatuses';
import ContractsStatusesChart from '@/features/contracts/components/ContractsStatusesChart';
import BucketGrowthRate from '@/features/contracts/components/BucketGrowthRate';
import BucketGrowthRateChart from '@/features/contracts/components/BucketGrowthRateChart';
import { ContractsReport } from '@/features/contracts/components/ContractsReport';
import ContractsReportTable from '@/features/contracts/components/ContractsReportTable';
import ContractsFilter from '@/features/contracts/components/ContractsFilter';
import axios from 'axios';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import {
  getSelectedMonth,
  getSelectedPortfolio,
  getSelectedYear,
} from '@/features/contracts/store/contractSlice';
import ErrorFallback from '@/features/contracts/components/ErrorFallback';

const Contracts = () => {
  const selectedYear = useSelector(getSelectedYear);
  const selectedMonth = useSelector(getSelectedMonth);
  const selectedPortfolio = useSelector(getSelectedPortfolio);

  const getData = async () => {
    const response = await axios.get(
      `http://localhost:4000/api/report/contracts?year=${selectedYear
        .toString()
        .trim()}&month=${selectedMonth
        .toString()
        .trim()}&portfolio=${selectedPortfolio}`
    );
    return response.data.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: [
      'contracts-charts',
      selectedYear,
      selectedMonth,
      selectedPortfolio,
    ],
    queryFn: getData,
    placeholderData: keepPreviousData,
  });
  console.log(data);

  return (
    <>
      <div className="p-4">
        <div className="flex items-center justify-between flex-col gap-y-4 lg:flex-row mb-4">
          <AppHeading title="العقود" />
          <ContractsFilter />
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <ErrorFallback>
              <ContractsStatuses isLoading={isLoading}>
                <ContractsStatusesChart
                  data={data?.barChart}
                  isEmpty={!isLoading && (!data || !data.barChart.length)}
                />
              </ContractsStatuses>
            </ErrorFallback>
          </div>
          <div>
            <ErrorFallback>
              <BucketGrowthRate isLoading={isLoading}>
                <BucketGrowthRateChart
                  data={data?.lineChart}
                  isEmpty={!isLoading && (!data || !data.lineChart.length)}
                />
              </BucketGrowthRate>
            </ErrorFallback>
          </div>
          <div>
            <ErrorFallback>
              <ContractsReport>
                <ContractsReportTable />
              </ContractsReport>
            </ErrorFallback>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contracts;
