import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';

const PaymentAmount = ({ children }) => {
  return (
    <Card>
      <CardHeader className="px-4 py-4">
        <CardTitle className="text-right font-bold">مبلغ الدفعات</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default PaymentAmount;
