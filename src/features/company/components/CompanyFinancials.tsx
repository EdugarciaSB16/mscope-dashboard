import { financialMetrics } from '@/data';

const CompanyFinancials = () => {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-base font-medium text-zinc-900 mb-8">
        Company financials
      </h2>

      <div className="flex flex-col gap-8">
        {financialMetrics
          .filter((m) => m.isScore)
          .map(({ label, value }) => (
            <div key={label} className="flex flex-col items-start">
              <div className="text-[#209464] text-[52px] font-medium leading-[1]">
                {value}
              </div>
              <div className="text-[11px] text-[#8f8f91]">{label}</div>
            </div>
          ))}

        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          {financialMetrics
            .filter((m) => !m.isScore)
            .map(({ label, value }) => (
              <div key={label} className="flex flex-col items-start">
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
  );
};

export default CompanyFinancials;
