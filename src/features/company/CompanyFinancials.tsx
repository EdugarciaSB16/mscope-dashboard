import { Card, CardContent } from '@/components/ui/card';

const leftMetrics = [
  { label: 'Score', value: 'A1', color: 'text-[#209464]', size: 'text-[52px]' },
  { label: 'Turnover', value: '€30M' },
  { label: '5Y T/O CAGR', value: '6.1%' },
  { label: 'EBITDA Margin', value: '8.5%' },
];

const rightMetrics = [
  { label: 'EBITDA', value: '€5M' },
  { label: '5Y EBITDA CAGR', value: '4.3%' },
  { label: 'NFD/EBITDA', value: '2.4x' },
];

const CompanyFinancials = () => {
  return (
    <Card className="bg-white rounded-xl shadow-sm h-full">
      <CardContent className="flex flex-col h-full pt-6">
        <h2 className="text-base font-medium text-zinc-900 mb-8">
          Company financials
        </h2>

        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-4 w-[122px]">
            {leftMetrics.map(({ label, value, color, size }, i) => (
              <div key={i} className="flex flex-col items-start">
                <div
                  className={`font-medium whitespace-nowrap ${
                    color ?? 'text-zinc-900'
                  } ${size ?? 'text-[22px]'} leading-[26px]`}
                >
                  {value}
                </div>
                <div className="text-[11px] text-[#8f8f91] whitespace-nowrap">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 w-36">
            {rightMetrics.map(({ label, value }, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="text-zinc-900 text-[22px] font-medium leading-[26px] whitespace-nowrap">
                  {value}
                </div>
                <div className="text-[11px] text-[#8f8f91] whitespace-nowrap">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyFinancials;
