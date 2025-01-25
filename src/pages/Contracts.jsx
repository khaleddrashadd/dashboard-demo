import ChTest from './ChTest';
import AppHeading from '@/components/AppHeading';
import ContractsStatuses from '@/features/contracts/ContractsStatuses';
import { useState } from 'react';
import ContractsStatusesChart from '@/features/contracts/ContractsStatusesChart';
import BucketGrowthRate from '@/features/contracts/BucketGrowthRate';
import BucketGrowthRateChart from '@/features/contracts/BucketGrowthRateChart';

const Contracts = () => {
  const [selectedBucket, setSelectedBucket] = useState(null);

  return (
    <>
      <div className="p-4">
        <div className="flex items-center justify-between flex-col gap-y-4 md:flex-row mb-4">
          <AppHeading title="العقود" />
          FILTER
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <ContractsStatuses>
              <ContractsStatusesChart setSelectedBucket={setSelectedBucket} />
            </ContractsStatuses>
          </div>
          <div>
            <BucketGrowthRate>
              <BucketGrowthRateChart selectedBucket={selectedBucket} />
            </BucketGrowthRate>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contracts;
