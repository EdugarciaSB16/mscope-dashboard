import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';
import { incomeStatement, years } from '@/data';

const IncomeStatementTable: React.FC = () => {
  const exportToExcel = () => {
    const headers = [
      'Income Statement (€M)',
      '5Y CAGR (%)',
      'Turnover (%)',
      ...years,
    ];

    const rows = incomeStatement.map((row) => [
      row.label,
      row.cagr,
      row.turnoverPct,
      ...row.values,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Income Statement');

    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    const blob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    saveAs(blob, 'income-statement.xlsx');
  };

  return (
    <div className="mt-10 overflow-auto">
      <div className="flex justify-end mb-4">
        <Button
          variant="outline"
          onClick={exportToExcel}
          className="flex items-center gap-2 h-auto font-semibold text-color-palette-palette-content-high border-black cursor-pointer"
        >
          <DownloadIcon className="w-4 h-4" />
          <span className="font-mid-m-semibold text-[14px] leading-[18px]">
            Export
          </span>
        </Button>
      </div>
      <Table className="border-separate border-spacing-y-2">
        <TableHeader>
          <TableRow className="text-[#626266]">
            <TableHead className="min-w-[200px]">
              Income Statement (€M)
            </TableHead>
            <TableHead>5Y CAGR (%)</TableHead>
            <TableHead>Turnover (%)</TableHead>
            {years.map((year) => (
              <TableHead key={year}>{year}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {incomeStatement.map((row) => (
            <TableRow key={row.label} className="text-[#18181B] h-12">
              <TableCell
                className={`
                ${row.bold ? 'font-semibold border-b' : 'pl-6 border-b'}
          ${row.bold ? 'border-[#8F8F91]' : 'border-[#D8D8D9]'}
        `}
              >
                {row.label}
              </TableCell>
              <TableCell
                className={`font-normal border-b ${
                  row.bold ? 'border-[#8F8F91]' : 'border-[#D8D8D9]'
                }`}
              >
                {row.cagr}
              </TableCell>
              <TableCell
                className={`font-normal border-b ${
                  row.bold ? 'border-[#8F8F91]' : 'border-[#D8D8D9]'
                }`}
              >
                {row.turnoverPct}
              </TableCell>
              {row.values.map((val, idx) => (
                <TableCell
                  key={idx}
                  className={`font-normal border-b ${
                    row.bold ? 'border-[#8F8F91]' : 'border-[#D8D8D9]'
                  }`}
                >
                  {val}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default IncomeStatementTable;
