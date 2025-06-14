import { Card, CardContent } from '@/components/ui/card';
import CompanyDetails from '@/features/company/components/CompanyDetails';
import CompanyFinancials from '@/features/company/components/CompanyFinancials';
import CompanyRadar from '@/features/company/components/CompanyRadar';
import CompanyTab from '@/features/company/components/CompanyTab';

const CompanyHeader = () => {
  return (
    <div className="w-full relative">
      <Card className="bg-white shadow-sm h-full">
        <CardContent className="p-0 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 h-full min-h-[400px]">
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
      <div className="absolute bottom-0 left-0 w-full z-10 transform translate-y-1/2 flex justify-center">
        <CompanyTab />
      </div>
    </div>
  );
};

export default CompanyHeader;
