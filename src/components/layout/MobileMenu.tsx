import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navigationLinks } from '@/data';
import logo from '@/assets/logo.png';
import UserProfile from './UserProfile';

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-64 p-0">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col space-y-4 py-6">
            <div className="px-4">
              <img
                src={logo}
                alt="mscope logo"
                className="w-[121px] h-[20px] object-contain"
              />
            </div>
            <nav className="flex flex-col gap-2">
              {navigationLinks.map(({ label, href, isBeta }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm font-medium flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-accent transition-colors text-[#18181B]"
                >
                  {label}
                  {isBeta && (
                    <span className="bg-[#E91C11] text-[10px] font-bold text-white px-1 rounded leading-[14px] tracking-[0.2px]">
                      Beta
                    </span>
                  )}
                </a>
              ))}
            </nav>
          </div>
          <div className="p-4 border-t">
            <UserProfile />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
