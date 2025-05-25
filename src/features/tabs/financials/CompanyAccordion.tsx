import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { year: '2012', nfdEbitda: 120, capexEbitda: 80 },
  { year: '2013', nfdEbitda: 130, capexEbitda: 85 },
  { year: '2014', nfdEbitda: 125, capexEbitda: 82 },
  { year: '2015', nfdEbitda: 115, capexEbitda: 78 },
  { year: '2016', nfdEbitda: 118, capexEbitda: 80 },
  { year: '2017', nfdEbitda: 122, capexEbitda: 82 },
  { year: '2018', nfdEbitda: 128, capexEbitda: 85 },
  { year: '2019', nfdEbitda: 135, capexEbitda: 88 },
  { year: '2020', nfdEbitda: 140, capexEbitda: 90 },
  { year: '2021', nfdEbitda: 138, capexEbitda: 87 },
  { year: '2022', nfdEbitda: 132, capexEbitda: 85 },
];

const CompanyAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm font-medium">
          Income Statement
        </AccordionTrigger>
        <AccordionContent>
          <div className="w-full h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="nfdEbitda"
                  stroke="#8884d8"
                  name="NFD/EBITDA"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="capexEbitda"
                  stroke="#82ca9d"
                  name="CAPEX/EBITDA"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-sm font-medium">
          Balance Sheet
        </AccordionTrigger>
        <AccordionContent>{/* Contenido pendiente */}</AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-sm font-medium">
          Cashflow
        </AccordionTrigger>
        <AccordionContent>{/* Contenido pendiente */}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CompanyAccordion;
