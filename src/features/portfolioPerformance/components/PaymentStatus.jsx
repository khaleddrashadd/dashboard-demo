import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';

const PaymentStatus = ({ children }) => {
  return (
    <Card>
      <CardHeader className="px-4 py-4">
        <CardTitle className="text-right font-bold">حالة الدفعات</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default PaymentStatus;
