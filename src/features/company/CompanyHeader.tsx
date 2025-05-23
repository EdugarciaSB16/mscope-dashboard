import CompanyDetails from './CompanyDetails';
import CompanyFinancials from './CompanyFinancials';
import CompanyRadar from './CompanyRadar';

const CompanyHeader = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
        <div className="lg:col-span-2">
          <CompanyDetails />
        </div>
        <div className="lg:col-span-1">
          <CompanyFinancials />
        </div>
        <div className="lg:col-span-1">
          <CompanyRadar />
        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;
