import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import HistoricalFinancialChart from '@/features/tabs/financials/components/HistoricalFinancialChart';
import NfdCapexChart from '@/features/tabs/financials/components/NfdCapexChart';
import IncomeStatementTable from '@/features/tabs/financials/components/IncomeStatementTable';

const CompanyAccordion = () => {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="w-full mt-8"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-[18px] font-medium leading-[22px]">
          Income Statement
        </AccordionTrigger>
        <AccordionContent>
          <span className="text-[16px] font-medium leading-[20px]">
            Historical Financial
          </span>
          <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-2">
            <div className="w-full h-[300px] md:h-[400px]">
              <HistoricalFinancialChart />
            </div>
            <div className="w-full h-[300px] md:h-[400px]">
              <NfdCapexChart />
            </div>
          </div>
          <div className="w-full pt-2">
            <IncomeStatementTable />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-[18px] font-medium leading-[22px]">
          Balance Sheet
        </AccordionTrigger>
        <AccordionContent>{/* Contenido pendiente */}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-[18px] font-medium leading-[22px]">
          Cashflow
        </AccordionTrigger>
        <AccordionContent>{/* Contenido pendiente */}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CompanyAccordion;
