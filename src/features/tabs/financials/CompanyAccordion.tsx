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
        <AccordionTrigger className="text-sm font-medium">
          Income Statement
        </AccordionTrigger>
        <AccordionContent>
          <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full h-[300px] md:h-[400px]">
              <HistoricalFinancialChart />
            </div>
            <div className="w-full h-[300px] md:h-[400px]">
              <NfdCapexChart />
            </div>
          </div>
          <div className="w-full pt-5">
            <IncomeStatementTable />
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-sm font-medium">
          Financial Metrics
        </AccordionTrigger>
        <AccordionContent>{/* Contenido pendiente */}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CompanyAccordion;
