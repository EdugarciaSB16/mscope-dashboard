import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const incomeStatement = [
  {
    label: 'Turnover',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'Cost of sales',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'Gross profit',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'Admin & Op. Expenses',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'Other operating Income/Cost',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'Normalized EBITDA',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'Extraordinary Items',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'Other asset-related works',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'EBIT',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'Financial income',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'Financial expenses',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'EBT',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'Taxes',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'Net profit',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
];

const years = [
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
];

const IncomeStatementTable = () => {
  return (
    <div className="mt-8 overflow-auto">
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
              <TableCell>{row.label}</TableCell>
              <TableCell className="font-normal">{row.cagr}</TableCell>
              <TableCell className="font-normal">{row.turnoverPct}</TableCell>
              {row.values.map((val, idx) => (
                <TableCell key={idx} className="font-normal">
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
