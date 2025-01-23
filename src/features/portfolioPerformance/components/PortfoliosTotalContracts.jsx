import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';

const PortfoliosTotalContracts = ({ children }) => {
  return (
    <Card>
      <CardHeader className="px-4 py-4">
        <CardTitle className="text-right font-bold">
          إجمالي عدد العقود للمحافظ
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default PortfoliosTotalContracts;
