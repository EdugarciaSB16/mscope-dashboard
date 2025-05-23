import React from 'react';
import logo from '@/assets/logo.png';
import SearchBox from '@/components/layout/SearchBox';
import UserProfile from '@/components/layout/UserProfile';
import MobileMenu from '@/components/layout/MobileMenu';
import { navigationLinks } from '@/data';

const Header: React.FC = () => {
  const currentPath = '/companies';

  return (
    <header className="w-full h-[52px] bg-[#FCFCFD] border-b border-[#E6E6E6] sticky top-0 z-50">
      <div className="max-w-[1280px] h-full mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="mscope logo"
            className="w-[121px] h-[20px] object-contain"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-6 h-full">
          {navigationLinks.map(({ label, href, isBeta }) => {
            const isActive = currentPath === href;

            return (
              <div
                key={label}
                className={`h-full flex items-center cursor-pointer ${
                  isActive ? 'border-b-2 border-[#E91C11]' : ''
                }`}
              >
                <div className="flex items-center gap-1">
                  <span
                    className={`text-sm ${
                      isActive ? 'font-medium' : 'text-[#18181B]'
                    }`}
                  >
                    {label}
                  </span>
                  {isBeta && (
                    <span className="bg-[#E91C11] text-[10px] font-bold text-white px-1 rounded leading-[14px] tracking-[0.2px]">
                      Beta
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <SearchBox />
          <UserProfile />
        </div>

        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
