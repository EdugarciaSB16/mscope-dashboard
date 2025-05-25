import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CompanyTab: React.FC = () => {
  const tabItems = [
    { id: 'summary', label: 'Summary' },
    { id: 'financials', label: 'Financials' },
    { id: 'peers', label: 'Peers' },
    { id: 'company-info', label: 'Company info' },
    { id: 'news-events', label: 'News and events' },
  ];

  return (
    <Tabs defaultValue="financials" className="w-fit">
      <TabsList className="bg-[#e6e6e6] p-0 h-auto overflow-x-auto max-w-[calc(100vw-32px)] sm:max-w-none flex flex-nowrap">
        {tabItems.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className="px-2 sm:px-4 py-1 sm:py-2 rounded whitespace-nowrap
            data-[state=active]:border-black
            data-[state=active]:shadow-[0px_0px_4px_#1d1d1d40] 
            data-[state=inactive]:border-none"
          >
            <span className="text-[11px] sm:text-[12px] font-[500] tracking-[0px] leading-[16px]">
              {tab.label}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default CompanyTab;
