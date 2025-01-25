import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { Skeleton } from '@/components/ui/skeleton';

const BucketGrowthRate = ({ children, isLoading }) => {
  if (isLoading) {
    return <Skeleton className="w-full h-[21.8rem]" />;
  }
  return (
    <Card>
      <CardHeader className="px-4 py-4">
        <CardTitle className="text-right font-bold">
          <span>معدل تزايد ال Buckets </span>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default BucketGrowthRate;
