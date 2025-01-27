import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { Skeleton } from '@/components/ui/skeleton';
import ContractBadge from './ContractBadge';
import EmptyState from '@/components/EmptyState';

const ContractsStatuses = ({ children, isLoading, isEmpty }) => {
  if (isLoading) {
    return <Skeleton className="w-full h-[21.8rem]" />;
  }
  if (isEmpty) {
    return (
      <EmptyState>
        <p className="font-semibold">لا توجد بيانات</p>
      </EmptyState>
    );
  }
  return (
    <Card>
      <CardHeader className="px-4 py-4">
        <CardTitle className="text-right font-bold flex items-center justify-between">
          <span>حالات العقود</span>
          <ContractBadge className="font-semibold">
            <span> إجمالي عدد العقود: </span>
            <span>118</span>
          </ContractBadge>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ContractsStatuses;
