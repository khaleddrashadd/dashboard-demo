import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { Skeleton } from '@/components/ui/skeleton';

const ContractsStatuses = ({ children, isLoading }) => {
  if (isLoading) {
    return <Skeleton className="w-full h-[21.8rem]" />;
  }
  return (
    <Card>
      <CardHeader className="px-4 py-4">
        <CardTitle className="text-right font-bold">
          <span>حالات العقود</span>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ContractsStatuses;
