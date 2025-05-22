import React from 'react';
import { Search } from 'lucide-react';

const SearchBox: React.FC = () => {
  return (
    <div className="w-[300px] h-[34px] flex items-center gap-2 px-3 py-1 border border-[#E6E6E6] rounded">
      <Search className="w-4 h-4 text-[#8F8F91]" />
      <input
        type="text"
        placeholder="Search"
        className="w-full text-sm text-[#8F8F91] placeholder-[#8F8F91] bg-transparent focus:outline-none"
      />
    </div>
  );
};

export default SearchBox;
