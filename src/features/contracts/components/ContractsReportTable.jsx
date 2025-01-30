import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Pagination from '@/components/Pagination';
import EmptyState from '@/components/EmptyState';

const ContractsReportTable = () => {
  let data = [
    {
      contractId: '123456780',
      realEstateId: '987654',
      fullName: 'مصطفى الشيتي',
      nationalId: '1236224577',
      unitId: '987654',
      contractStatus: 'Bucket 1',
      dateInDays: '9',
      directAmount: '30900 ريال',
      monthlyAmount: '30900 ريال',
      installmentAmount: '30900 ريال',
      remainingAmount: '30900 ريال',
    },
    // Add more sample data here
  ];

  const handlePageChange = (page) => {
    console.log(page);
  };

  const handlePageSize = (size) => {
    console.log(size);
  };

  return (
    <div className="w-full px-4">
      <div className="rounded-md border">
        <Table dir="rtl">
          <TableHeader className="text-sm">
            <TableRow className="bg-primary-50">
              <TableHead className="text-center font-semibold text-nowrap">
                رقم العقد
              </TableHead>
              <TableHead className="text-center font-semibold text-nowrap">
                رقم الصندوق العقاري
              </TableHead>
              <TableHead className="text-center font-semibold text-nowrap">
                الاسم بالكامل
              </TableHead>
              <TableHead className="text-center font-semibold text-nowrap">
                رقم الهوية
              </TableHead>
              <TableHead className="text-center font-semibold text-nowrap">
                رقم سداد
              </TableHead>
              <TableHead className="text-center font-semibold text-nowrap">
                حالة العقد
              </TableHead>
              <TableHead className="text-center font-semibold text-nowrap">
                التأخير في السداد بالأيام
              </TableHead>
              <TableHead className="text-center font-semibold text-nowrap">
                المبلغ المباشر
              </TableHead>
              <TableHead className="text-center font-semibold text-nowrap">
                المبلغ الشهري
              </TableHead>
              <TableHead className="text-center font-semibold text-nowrap">
                المبلغ المستحق
              </TableHead>
              <TableHead className="text-center font-semibold text-nowrap">
                أصل المبلغ
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colspan="11">
                  <EmptyState className="mx-auto">
                    لم نحصل على نتائج، برجاء المحاولة مرة أخرى.
                  </EmptyState>
                </TableCell>
              </TableRow>
            ) : (
              data?.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="text-center">
                    {row.contractId}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.realEstateId}
                  </TableCell>
                  <TableCell className="text-center">{row.fullName}</TableCell>
                  <TableCell className="text-center">
                    {row.nationalId}
                  </TableCell>
                  <TableCell className="text-center">{row.unitId}</TableCell>
                  <TableCell className="text-center">
                    {row.contractStatus}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.dateInDays}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.directAmount}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.monthlyAmount}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.installmentAmount}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.remainingAmount}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Pagination
        className="justify-end"
        totalItems={1000}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSize}
      />
    </div>
  );
};

export default ContractsReportTable;
