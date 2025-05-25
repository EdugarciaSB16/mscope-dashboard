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
    <div className="px-2">
      <Tabs defaultValue="summary" className="w-fit">
        <TabsList className="bg-[#e6e6e6] rounded-[4px] p-[2px] h-auto overflow-x-auto max-w-[calc(100vw-48px)] sm:max-w-none flex flex-nowrap">
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="px-2 sm:px-2 py-1 rounded-[4px] whitespace-nowrap 
                data-[state=active]:bg-white
                data-[state=active]:text-black
                data-[state=active]:border-[#626266]
                data-[state=inactive]:border-none
                data-[state=inactive]:hover:bg-white/50 transition-colors 
                data-[state=inactive]:text-[#626266]
                "
            >
              <span className="text-[10px] sm:text-[12px] tracking-[0px] leading-[16px]">
                {tab.label}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default CompanyTab;
