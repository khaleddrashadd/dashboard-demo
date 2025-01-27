import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { Skeleton } from '@/components/ui/skeleton';
import ContractBadge from './ContractBadge';
import ContractsReportTableFilter from './ContractsReportTableFilter';

export const ContractsReport = ({ children, isLoading }) => {
  if (isLoading) {
    return <Skeleton className="w-full h-[21.8rem]" />;
  }
  return (
    <Card>
      <CardHeader className="px-4 py-4 bg-white">
        <CardTitle className="text-right font-bold flex items-center justify-between">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center gap-4">
              <span>تقرير العقود</span>
              <ContractBadge>
                <div className="flex items-center gap-1">
                  <span>118</span>
                  <span>عقد</span>
                </div>
              </ContractBadge>
            </div>
            <ContractsReportTableFilter />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
