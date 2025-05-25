import CompanyHeader from '@/features/company/components/CompanyHeader';
import CompanyAccordion from '@/features/tabs/financials/CompanyAccordion';

const CompanyPage = () => {
  return (
    <div className="w-full relative">
      <CompanyHeader />
      <CompanyAccordion />
    </div>
  );
};

export default CompanyPage;
