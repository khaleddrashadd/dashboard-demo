import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';

const BucketRate = ({ children }) => {
  return (
    <Card>
      <CardHeader className="px-4 py-4">
        <CardTitle className="text-right font-bold">معدل ال Buckets</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default BucketRate;
