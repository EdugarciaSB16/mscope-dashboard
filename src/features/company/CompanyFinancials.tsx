import { Card, CardContent } from '@/components/ui/card';

const scoreMetric = { label: 'Score', value: 'A1' };

const leftMetrics = [
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

        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-start">
            <div className="text-[#209464] text-[52px] font-medium leading-[1]">
              {scoreMetric.value}
            </div>
            <div className="text-[11px] text-[#8f8f91]">
              {scoreMetric.label}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            <div className="flex flex-col gap-4">
              {leftMetrics.map(({ label, value }, i) => (
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

            <div className="flex flex-col gap-4">
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
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyFinancials;
