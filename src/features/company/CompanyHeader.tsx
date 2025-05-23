import CompanyDetails from './CompanyDetails';
import CompanyFinancials from './CompanyFinancials';
import CompanyRadar from './CompanyRadar';

const CompanyHeader = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <CompanyDetails />
        <CompanyFinancials />
        <CompanyRadar />
      </div>
    </div>
  );
};

export default CompanyHeader;
