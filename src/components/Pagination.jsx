import { useState } from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Pagination = ({
  className,
  totalItems = 0,
  initialPageSize = 10,
  onPageChange = (page) => console.log(page),
  onPageSizeChange = (size) => console.log(size),
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize || 10);
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const pageSizeOptions = () => {
    const totalSize = totalItems / 10;
    const sizeOptions = [];
    for (let i = 0; i <= totalSize; i++) {
      if (i > 0 && i <= 5) sizeOptions.push(i * 10);
    }
    return sizeOptions;
  };

  const renderPageNumbers = () => {
    const pages = [];
    let maxVisiblePages = 7;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Add first page
    if (startPage > 1) {
      pages.push(
        <Button
          variant="outline"
          key={1}
          onClick={() => handlePageChange(1)}
          className="px-3 py-2 rounded "
        >
          1
        </Button>
      );
      if (startPage > 2) {
        pages.push(
          <span key="start-ellipsis" className="px-2 py-2">
            <MoreHorizontal className="w-4 h-4 inline-block" />
          </span>
        );
      }
    }

    // Add page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Button
          variant="outline"
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-2 rounded ${
            currentPage === i ? 'border-primary-500 text-primary-500' : ''
          }`}
        >
          {i}
        </Button>
      );
    }

    // Add last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="end-ellipsis" className="px-2 py-2">
            <MoreHorizontal className="w-4 h-4 inline-block" />
          </span>
        );
      }
      pages.push(
        <Button
          variant="outline"
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="px-3 py-2 rounded"
        >
          {totalPages}
        </Button>
      );
    }

    return pages;
  };

  const handleValueChange = (value) => {
    setPageSize(Number(value));
    onPageSizeChange(Number(value));
  };
  return (
    <div
      className={cn('flex items-center justify-between px-2 py-4', className)}
    >
      <div className="flex items-center px-2 py-4 gap-3 justify-end">
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded rtl:-scale-x-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {renderPageNumbers()}

          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4 rtl:-scale-x-100" />
          </Button>
        </div>

        <Select
          value={pageSize.toString()}
          onValueChange={handleValueChange}
          className="mr-auto"
        >
          <SelectTrigger className="w-24 px-3 py-1 bg-primary-50">
            <SelectValue>{pageSize}/page</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {pageSizeOptions().map((option, index) => (
              <SelectItem key={index} value={option}>
                {option}/page
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Pagination;
