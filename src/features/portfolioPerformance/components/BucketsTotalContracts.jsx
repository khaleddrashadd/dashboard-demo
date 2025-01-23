import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';

const BucketsTotalContracts = ({ children }) => {
  return (
    <Card>
      <CardHeader className="px-4 py-4">
        <CardTitle className="text-right font-bold">
          عدد العقود في ال Bucket
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default BucketsTotalContracts;
