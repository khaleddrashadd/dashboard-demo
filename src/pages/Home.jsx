import { Card, CardContent, CardHeader, CardTitle } from '../components/card';
import CollectionPerformanceChart from '../features/portfolioPerformance/components/CollectionPerformanceChart';
import DelayRateChart from '../features/portfolioPerformance/components/DelayRateChart';
import InstallmentNumberChart from '../features/portfolioPerformance/components/InstallmentNumberChart';
import CustomerSatisfactionChart from '../features/portfolioPerformance/components/CustomerSatisfactionChart';
import ContractStatusChart from '../features/portfolioPerformance/components/ContractStatusChart';
import AppHeading from '../components/AppHeading';
import PortfolioFilter from '../features/portfolioPerformance/components/PortfolioFilter';

export default function Home() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <AppHeading title="لوحة متابعة آداء المحافظ" />
        <PortfolioFilter />
      </div>
      <div
        className="w-full"
        dir="ltr">
        {/* Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-right">
              متابعة أداء التحصيل (بالريال)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CollectionPerformanceChart />
          </CardContent>
        </Card>
        {/* Three Pie Charts in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-right">معدل التأخير</CardTitle>
            </CardHeader>
            <CardContent>
              <DelayRateChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-right">عدد الأقساط</CardTitle>
            </CardHeader>
            <CardContent>
              <InstallmentNumberChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-right">مدى رضاء العملاء</CardTitle>
            </CardHeader>
            <CardContent>
              <CustomerSatisfactionChart />
            </CardContent>
          </Card>
        </div>
        {/* Bar Chart */}
        <div className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-right">حالة العقود</CardTitle>
            </CardHeader>
            <CardContent>
              <ContractStatusChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
