import { Card, CardContent } from '@/components/ui/card';
import CompanyDetails from './CompanyDetails';
import CompanyFinancials from './CompanyFinancials';
import CompanyRadar from './CompanyRadar';

const CompanyHeader = () => {
  return (
    <div className="w-full">
      <Card className="bg-white shadow-sm h-full">
        <CardContent className="p-0 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 h-full min-h-[350px]">
            <div className="lg:col-span-2 p-6 flex flex-col h-full">
              <CompanyDetails />
            </div>
            <div className="lg:col-span-1 p-6 flex flex-col h-full">
              <CompanyFinancials />
            </div>
            <div className="lg:col-span-1 p-6 flex flex-col h-full">
              <CompanyRadar />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyHeader;
