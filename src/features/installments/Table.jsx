import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import Pagination from "@/components/Pagination";
import { cn } from "@/lib/utils";
import EmptyState from "@/assets/icons/empty-grid.svg?react";

const InstallmentsTable = ({ className, ...props }) => {
  const data = [
    {
      contractId: "123456780",
      sadadId: "987654",
      nationalId: "1236224577",
      beneficiaryName: "987654",
      mobile: "Bucket 1",
      paidAmount: "30900 ريال",
      paymentDate: "30900 ريال",
    },
    {
      contractId: "123456780",
      sadadId: "987654",
      nationalId: "1236224577",
      beneficiaryName: "987654",
      mobile: "Bucket 1",
      paidAmount: "30900 ريال",
      paymentDate: "30900 ريال",
    },
    {
      contractId: "123456780",
      sadadId: "987654",
      nationalId: "1236224577",
      beneficiaryName: "987654",
      mobile: "Bucket 1",
      paidAmount: "30900 ريال",
      paymentDate: "30900 ريال",
    },
    {
      contractId: "123456780",
      sadadId: "987654",
      nationalId: "1236224577",
      beneficiaryName: "987654",
      mobile: "Bucket 1",
      paidAmount: "30900 ريال",
      paymentDate: "30900 ريال",
    },
    {
      contractId: "123456780",
      sadadId: "987654",
      nationalId: "1236224577",
      beneficiaryName: "987654",
      mobile: "Bucket 1",
      paidAmount: "30900 ريال",
      paymentDate: "30900 ريال",
    },
    {
      contractId: "123456780",
      sadadId: "987654",
      nationalId: "1236224577",
      beneficiaryName: "987654",
      mobile: "Bucket 1",
      paidAmount: "30900 ريال",
      paymentDate: "30900 ريال",
    },
    {
      contractId: "123456780",
      sadadId: "987654",
      nationalId: "1236224577",
      beneficiaryName: "987654",
      mobile: "Bucket 1",
      paidAmount: "30900 ريال",
      paymentDate: "30900 ريال",
    },
    {
      contractId: "123456780",
      sadadId: "987654",
      nationalId: "1236224577",
      beneficiaryName: "987654",
      mobile: "Bucket 1",
      paidAmount: "30900 ريال",
      paymentDate: "30900 ريال",
    },
    {
      contractId: "123456780",
      sadadId: "987654",
      nationalId: "1236224577",
      beneficiaryName: "987654",
      mobile: "Bucket 1",
      paidAmount: "30900 ريال",
      paymentDate: "30900 ريال",
    },
    {
      contractId: "123456780",
      sadadId: "987654",
      nationalId: "1236224577",
      beneficiaryName: "987654",
      mobile: "Bucket 1",
      paidAmount: "30900 ريال",
      paymentDate: "30900 ريال",
    },
    {
      contractId: "123456780",
      sadadId: "987654",
      nationalId: "1236224577",
      beneficiaryName: "987654",
      mobile: "Bucket 1",
      paidAmount: "30900 ريال",
      paymentDate: "30900 ريال",
    },
  ];

  const handlePageChange = (page) => {
    console.log(page);
  };

  const handlePageSize = (size) => {
    console.log(size);
  };

  return (
    <Card className={cn("w-full shadow-sm", className)} {...props}>
      <div className="rounded-md border">
        <Table dir="rtl">
          <TableHeader className="text-sm">
            <TableRow className="bg-primary-50">
              <TableHead className="text-center font-semibold">
                رقم سداد
              </TableHead>
              <TableHead className="text-center font-semibold">
                رقم العقد
              </TableHead>
              <TableHead className="text-center font-semibold">
                رقم الهوية
              </TableHead>
              <TableHead className="text-center font-semibold">
                اسم المستفيد
              </TableHead>
              <TableHead className="text-center font-semibold">
                الجوال
              </TableHead>

              <TableHead className="text-center font-semibold">
                المبلغ المسدد
              </TableHead>
              <TableHead className="text-center font-semibold">
                تاريح الدفع
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? (
              data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="text-center">
                    {row.contractId}
                  </TableCell>
                  <TableCell className="text-center">{row.sadadId}</TableCell>
                  <TableCell className="text-center">
                    {row.nationalId}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.beneficiaryName}
                  </TableCell>
                  <TableCell className="text-center">{row.mobile}</TableCell>
                  <TableCell className="text-center">
                    {row.paidAmount}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.paymentDate}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={12} className="text-center py-10">
                  <div className="flex flex-col justify-center items-center gap-6 mx-auto w-full p-4 text-lg font-semibold">
                    {" "}
                    <EmptyState className="w-56 h-48" />
                    لم نحصل على نتائج، برجاء المحاولة مرة أخرى.
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {data.length > 10 && (
        <Pagination
          totalItems={data.length}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSize}
        />
      )}
    </Card>
  );
};

export default InstallmentsTable;
