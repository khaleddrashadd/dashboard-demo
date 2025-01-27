import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { Skeleton } from '@/components/ui/skeleton';
import BucketFilter from './BucketFilter';

const BucketGrowthRate = ({ children, isLoading }) => {
  if (isLoading) {
    return <Skeleton className="w-full h-[21.8rem]" />;
  }

  return (
    <Card>
      <CardHeader className="px-4 py-4">
        <CardTitle className="text-right font-bold flex items-center justify-between">
          <span>معدل تزايد ال Buckets </span>
          <BucketFilter />
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default BucketGrowthRate;
