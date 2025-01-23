import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';

const TotalValues = ({ children }) => {
  return (
    <Card className="h-full">
      <CardHeader className="px-4 py-4">
        <CardTitle className="text-right font-bold">
          <span>الإجمالي</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="py-3 px-4">{children}</CardContent>
    </Card>
  );
};

export default TotalValues;
