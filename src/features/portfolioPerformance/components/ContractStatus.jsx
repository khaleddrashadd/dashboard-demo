import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';

const ContractStatus = ({ children }) => {
  return (
    <Card>
      <CardHeader className="px-4 py-4">
        <CardTitle className="text-right font-bold">حالة العقود</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ContractStatus;
