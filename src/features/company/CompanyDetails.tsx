import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  ArrowUp,
  Asterisk,
  Calendar,
  Link,
  MapPin,
  ThumbsDown,
  ThumbsUp,
} from 'lucide-react';

const companyDetails = [
  { icon: <Asterisk className="w-4 h-4" />, text: 'B08245671' },
  { icon: <MapPin className="w-4 h-4" />, text: 'Madrid, Spain' },
  { icon: <Calendar className="w-4 h-4" />, text: '2022' },
  { icon: <Link className="w-4 h-4" />, text: 'www.companyname.es' },
];

const CompanyDetails = () => {
  return (
    <Card className="bg-white shadow-sm h-full">
      <CardContent className="flex flex-col h-full pt-6">
        <h1 className="text-[28px] font-medium text-zinc-900 leading-8 mb-4">
          Company name
        </h1>

        <div className="space-y-6">
          <p className="text-sm text-[#626266] leading-[18px]">
            Company specializes in the development and manufacturing of weaving
            machines and technology. Known for its advanced and efficient looms,
            Company integrates cutting-edge technology in its products to
            enhance textile production capabilities.
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="space-y-1">
              <span className="text-xs text-[#8f8f91] leading-4">
                Microsector
              </span>
              <Badge className="bg-[#e2f0eb] text-[#209464] px-1.5 py-1 h-auto hover:bg-[#e2f0eb] hover:text-[#209464]">
                <ArrowUp className="w-[11px] h-[11px] mr-1" />
                <span className="text-sm font-medium">Operators</span>
              </Badge>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-[#8f8f91] leading-4">
                Assessment of the company's classification
              </span>
              <div className="flex items-center">
                <Separator orientation="vertical" className="h-6 mr-3" />
                <div className="flex gap-2">
                  <div className="flex items-center justify-center w-6 h-6 bg-[#e6e6e6] rounded-full">
                    <ThumbsUp className="w-4 h-4" />
                  </div>
                  <div className="flex items-center justify-center w-6 h-6 bg-[#e6e6e6] rounded-full">
                    <ThumbsDown className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 max-w-[186px]">
            {companyDetails.map(({ icon, text }, index) => (
              <div key={index} className="flex items-center gap-2">
                {icon}
                <span className="text-sm text-[#626266] leading-[18px]">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyDetails;
