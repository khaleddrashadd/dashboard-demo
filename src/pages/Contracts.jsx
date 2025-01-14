import { Card, CardContent } from '../components/ui/card';
import ContractGrowthRate from '../features/contracts/ContractsGrowthRate';
import ContractStatus from '../features/contracts/ContractStatus';

const Contracts = () => {
  return (
    <div className="grid grid-cols-12">
      <Card className="mt-4 w-full col-span-3">
        <CardContent>FORM PLACEHOLDER</CardContent>
      </Card>
      <div className="flex flex-col w-full col-span-9">
        <Card className="mt-4 w-full">
          <CardContent>
            <ContractGrowthRate />
          </CardContent>
        </Card>
        <Card className="mt-4 w-full">
          <CardContent>
            <ContractStatus />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contracts;
