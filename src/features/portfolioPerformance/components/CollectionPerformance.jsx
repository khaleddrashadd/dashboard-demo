import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';

const CollectionPerformance = ({ children }) => {
  return (
    <Card>
      <CardHeader className="px-4 py-4">
        <CardTitle className="text-right font-bold">
          <span>متابعة آداء التحصيل</span>
          <span className="text-ivory-700 mx-1">(ريال)</span>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CollectionPerformance;
