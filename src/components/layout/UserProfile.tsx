import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';

const UserProfile: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-sm bg-[#E91C11] text-white flex items-center justify-center font-medium text-sm">
        GR
      </div>
      <div className="flex flex-col justify-center leading-tight">
        <span className="text-sm font-medium text-[#18181B]">Tresmares ES</span>
        <span className="text-[11px] text-[#8F8F91] truncate max-w-[120px]">
          gonzalo.rubio@msco...
        </span>
      </div>

      <div className="flex flex-col">
        <ChevronUp className="w-4 h-4 text-[#8F8F91]" />
        <ChevronDown className="w-4 h-4 text-[#8F8F91]" />
      </div>
    </div>
  );
};

export default UserProfile;
